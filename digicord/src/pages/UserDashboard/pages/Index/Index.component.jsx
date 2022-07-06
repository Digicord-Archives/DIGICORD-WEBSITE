import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import MainSidebar from "../../Component/MainSidebar/MainSidebar.component";
import Appointment from "../Appointment/Appointment.component";
import Home from "../Home/Home.component";

import { BsArrowLeftSquare } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import "./Index.styles.scss";

const UserDashboard = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null)
  const [header, setHeader] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleBackButton = () => {
    navigate(-1);
  };

  useEffect(()=>{
    if(isOpen){
        menuRef.current.style.color = "white"
    } else {
        menuRef.current.style.color = "#047d36"
    }
  }, [isOpen])

  return (
    <div className="userDashboardLayout">
      <MainSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="userDashboardMainPanel">
        <div className="userDashboardMobileHeader">
          <button ref={menuRef} className="menuToggler" onClick={() => setIsOpen(!isOpen)}>
            {
                isOpen ? <AiOutlineClose /> : <HiOutlineMenuAlt2 />
            }
          </button>
          <button className="backButton" onClick={handleBackButton}>
            <BsArrowLeftSquare />
          </button>
        </div>

        <div className="userDashboard__header">
          {header}
          <button className="backButton" onClick={handleBackButton}>
            <BsArrowLeftSquare /> Back
          </button>
        </div>
        <Routes basename="/">
          <Route path="/" element={<Home setHeader={setHeader} />} />
          <Route
            path="/appointment"
            element={<Appointment setHeader={setHeader} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default UserDashboard;
