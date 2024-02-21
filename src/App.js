import React from "react"
import HomePage from "./components/Home";
import HomeOwner from "./components/HomeO"
import Indexs from "./components/indexs";
import Nav from "./components/Header"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Postjob from "./components/PostJob";
import JobDetails from './components/JobDetails';
import EmployeeDetails from './components/EmployeeDetails'; 
import AppliedJobs from "./components/AppliedJobs";
import ViewMyJobs from "./components/ViewMyJobs";
import Arigato from "./components/arigato";
import { AuthProvider } from './components/AuthContext';




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  const userEmail = "gh@gmail.com";

  return (
    <div className="App">
   
      <Router>
      <AuthProvider>
        <Routes>
          <Route path = "/home" element={<HomePage />} />
          <Route path = "/homeO" element={<HomeOwner />} />
          <Route path = "/" element={<Indexs />} />
          <Route path = "/navbar" element={<Nav />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postjob" element={<Postjob />} />
          <Route path="/jobs/:id" element={<JobDetails email={userEmail}  />} />
          <Route path="/employee/:id" element={<EmployeeDetails />} />
          <Route path="/appliedJobs/:email" element={<AppliedJobs />}></Route>
          <Route path = "/ViewMyJobs" element={<ViewMyJobs />} />
          <Route path="/arigato" element={<Arigato />} />
         
          


          
          
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
// library.add(fab, fas, far)