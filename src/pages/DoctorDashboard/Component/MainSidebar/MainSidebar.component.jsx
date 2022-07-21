import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaBookMedical, FaFileMedical, FaUserEdit } from "react-icons/fa";
import {
  IoLogOut,
  IoSettingsSharp,
  IoFlaskSharp,
  IoDocumentTextSharp,
} from "react-icons/io5";
import { IoIosNotificationsOutline, IoMdNotifications } from "react-icons/io";
import { CgPill } from "react-icons/cg";

import avatar from "../../../../assets/images/avatar.png";

import "./MainSidebar.styles.scss";

const MainSidebar = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 900)
      if (isOpen && window.innerWidth <= 900) {
        sidebarRef.current?.classList.add("sidebarOpen");
      } else {
        sidebarRef.current?.classList.remove("sidebarOpen");
      }
  }, [isOpen]);

  return (
    <div ref={sidebarRef} className="doctorMainSidebarWrapper">
      <div className="mainSidebar">
        <div className="mainSidebar__user">
          <div className="profile">
            <div className="profile__img">
              <img src={avatar} alt="user avatar" />
            </div>
            <div className="profile__details">
              <p className="name">Shamyne Wills</p>
              <span>Shamynewills@gmail.com</span>
            </div>
          </div>
          <button className="notificationBtn">
            <IoIosNotificationsOutline />
          </button>
        </div>

        <nav className="navigation">
          <Link to="/doctor/appointment" className="navigation__items">
            <span>
              <FaBookMedical />
            </span>
            <p>View Patient Medical Records</p>
          </Link>
          <Link to="/doctor/records" className="navigation__items">
            <span>
              <FaFileMedical />
            </span>
            <p>manage Patient Appointment</p>
          </Link>
          <Link to="/doctor/history" className="navigation__items">
            <span>
              <IoFlaskSharp />
            </span>
            <p>Laboratory</p>
          </Link>
          <Link to="/doctor/notification" className="navigation__items">
            <span>
              <IoMdNotifications />
            </span>
            <p>Notifications</p>
          </Link>
          <Link to="/doctor/settings" className="navigation__items">
            <span>
              <CgPill />
            </span>
            <p>Pharmarcy</p>
          </Link>
          <Link to="/doctor/settings" className="navigation__items">
            <span>
              <IoDocumentTextSharp />
            </span>
            <p>Report</p>
          </Link>
          <Link to="/doctor/settings" className="navigation__items">
            <span>
              <IoSettingsSharp />
            </span>
            <p>Settings</p>
          </Link>
          <Link to="/doctor/edit-profile" className="navigation__items">
            <span>
              <FaUserEdit />
            </span>
            <p>Edit Profile</p>
          </Link>
          <button className="navigation__items">
            <span>
              <IoLogOut />
            </span>
            <p>Logout</p>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MainSidebar;
