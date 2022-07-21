import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages/Public/Index";
import UserDashboard from "./pages/UserDashboard/pages/Index/Index.component";
import "tachyons";
import SignUp from "./pages/Public/SignUp/SignUp";
import Doctorsignup from "./pages/Public/SignUp/Doctorsignup";
import Login from "./pages/Public/Login/Login";
import Doctorsignin from "./pages/Public/Login/Doctorsignin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Patientsignin from "./pages/Public/Login/Patientsignin";
import Patientsignup from "./pages/Public/SignUp/Patientsignup";
import DoctorDashboard from "./pages/DoctorDashboard/pages/Index/Index.component";
import StaffDashboard from "./pages/StaffDashboard/pages/Index/Index.component";
import PatientForgotPassword from './pages/Public/Login/PatientForgotPassword';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup_d" element={<Doctorsignup />} />
          <Route path="/signup_p" element={<Patientsignup />} />
          <Route path="/login_d" element={<Doctorsignin />} />
          <Route path="/login_p" element={<Patientsignin />} />
          <Route path="/forgot_p" element={<PatientForgotPassword/>} />
          <Route path="/user/*" element={<UserDashboard />} />
          <Route path="/doctor/*" element={<DoctorDashboard />} />
          <Route path="/staff/*" element={<StaffDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
