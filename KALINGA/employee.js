const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
  resumeLink: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["employee"],
    required: true,
  },
});

const EmployeeModel = mongoose.model("employee", employeeSchema);

module.exports = EmployeeModel;
