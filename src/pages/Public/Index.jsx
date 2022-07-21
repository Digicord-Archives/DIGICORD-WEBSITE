import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Landing from "./Landing-Page/Landing/Landing";
import SignUp from "./SignUp/SignUp";
import Footer from "../../components/Footer/Footer";
import Patientsignup from "./SignUp/Patientsignup";
import Doctorsignup from "./SignUp/Doctorsignup";
import Patientsignin from "./Login/Patientsignin";
import Doctorsignin from "./Login/Doctorsignin";

const Index = () => {
  return (
    <div style={{  margin: '0', padding: '0' }}>
      <Navbar />
      {/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup_d" element={<Doctorsignup />} />
        <Route path="/login_d" element={<Doctorsignin />} />
        <Route path="/login_p" element={<Patientsignin />} />
        <Route path="/signup_p" element={<Patientsignup />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Index;
