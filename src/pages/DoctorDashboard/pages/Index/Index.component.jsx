import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import MainSidebar from "../../Component/MainSidebar/MainSidebar.component";
import Appointment from "../Appointment/Appointment.component";
import Home from "../Home/Home.component";

import { BsArrowLeftSquare } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import "./Index.styles.scss";
import History from "../History/History";
import ViewMedicalRecord from "../ViewMedicalRecord/ViewMedicalRecord";
import Notification from "../Notification/Notification";
import Reminder from "../Reminder/Reminder";
import Settings from "../Settings/Settings";
import EditProfile from "../EditProfile/EditProfile";
import Calender from "../Calender/Calender";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [header, setHeader] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleBackButton = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (isOpen) {
      menuRef.current.style.color = "white";
    } else {
      menuRef.current.style.color = "#047d36";
    }
  }, [isOpen]);

  return (
    <div className="doctorDashboardLayout">
      <MainSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="doctorDashboardMainPanel">
        <div className="doctorDashboardMobileHeader">
          <button
            ref={menuRef}
            className={`menuToggler ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <HiOutlineMenuAlt2 />}
          </button>
          <button className="backButton" onClick={handleBackButton}>
            <BsArrowLeftSquare />
          </button>
        </div>

        <div className="doctorDashboard__header">
          {header}
          <button className="backButton" onClick={handleBackButton}>
            <BiArrowBack /> Back
          </button>
        </div>
        <Routes basename="/">
          <Route path="/" element={<Home setHeader={setHeader} />} />
          <Route
            path="/appointment"
            element={<Appointment setHeader={setHeader} />}
          />
          <Route path="/history" element={<History setHeader={setHeader} />} />
          <Route
            path="/notification"
            element={<Notification setHeader={setHeader} />}
          />
          <Route
            path="/reminder"
            element={<Reminder setHeader={setHeader} />}
          />
          <Route
            path="/records"
            element={<ViewMedicalRecord setHeader={setHeader} />}
          />
          <Route
            path="/edit-profile"
            element={<EditProfile setHeader={setHeader} />}
          />
          <Route
            path="/calender"
            element={<Calender setHeader={setHeader} />}
          />
          <Route
            path="/settings"
            element={<Settings setHeader={setHeader} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default DoctorDashboard;
