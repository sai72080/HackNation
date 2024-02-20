const express = require("express")
const OwnerModel = require("./owner");
const EmployeeModel = require("./employee");
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/login/owner", async (req, res) => {
  try {
    const { email, password } = req.body;

    const owner = await OwnerModel.findOne({ email, password, role: "owner" });

    if (owner) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.error("Error in owner login:", error);
    res.status(500).json("fail");
  }
});


app.post("/signup/owner", async (req, res) => {
  try {
    const { email, userName, contactNumber, shopName, location, pancardNumber, password } = req.body;
    const ownerData = {
      email,
      userName,
      contactNumber,
      shopName,
      location,
      pancardNumber,
      password,
      role: "owner",
    };
    
    // Save owner data in the 'collection' collection
    await OwnerModel.create(ownerData);

    res.json("notexist");
  } catch (error) {
    console.error("Error in owner signup:", error);
    res.status(500).json("fail");
  }
});

app.post("/signup/employee", async (req, res) => {
  try {
    const { email, userName, contactNumber, resumeLink, password } = req.body;
    const employeeData = {
      email,
      userName,
      contactNumber,
      resumeLink,
      password,
      role: "employee",
    };

    // Save employee data in a new 'employee' collection
    await EmployeeModel.create(employeeData);

    res.json("notexist");
  } catch (error) {
    console.error("Error in employee signup:", error);
    res.status(500).json("fail");
  }
});

app.post("/login/employee", async (req, res) => {
  try {
    const { email, password } = req.body;

    const employee = await EmployeeModel.findOne({ email, password, role: "employee" });

    if (employee) {
      res.json("exist");
    } else {
      res.json("notexist");
    }
  } catch (error) {
    console.error("Error in employee login:", error);
    res.status(500).json("fail");
  }
});

app.post("/updateProfile", async (req, res) => {
  const { email, userName, contactNumber, shopName, location, pancardNumber } = req.body;

  try {
    const updateFields = {
      userName,
      contactNumber,
      shopName,
      location,
      pancardNumber,
    };

    // Remove undefined or null values from the updateFields
    Object.keys(updateFields).forEach(key => updateFields[key] === undefined && delete updateFields[key]);

    const updatedUser = await OwnerModel.findOneAndUpdate(
      { email: email },
      {
        $set: updateFields,
      },
      { new: true }
    );

    console.log("Received update request with data:", req.body);

    console.log("Profile updated successfully:", updatedUser);

    res.json({ success: true, message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ success: false, error: "Failed to update profile." });
  }
});


app.get("/getProfile", async (req, res) => {
  try {
    const userData = await OwnerModel.findOne({ email: req.query.email });

    if (userData) {
      res.json({ success: true, userData });
    } else {
      res.status(404).json({ success: false, error: "User not found." });
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ success: false, error: "Failed to fetch user data." });
  }
});


  


app.listen(8000,()=>{
    console.log("port connected");
})