import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Landing from "./Landing-Page/Landing/Landing";
import Footer from "../../components/Footer/Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Index;
