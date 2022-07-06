import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaBookMedical, FaFileMedical, FaUserEdit } from "react-icons/fa";
import { IoLogOut, IoSettingsSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { RiHistoryFill } from "react-icons/ri";

import avatar from "../../../../assets/images/avatar.png";

import "./MainSidebar.styles.scss";

const MainSidebar = ({ isOpen, setIsOpen }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      sidebarRef.current.style.width = "17.5rem";
    } else {
      sidebarRef.current.style.width = "0px";
    }
  }, [isOpen]);

  return (
    <div ref={sidebarRef} className="mainSidebarWrapper">
      <div className="mainSidebar">
        <div className="profile">
          <div className="profile__img">
            <img src={avatar} alt="user avatar" />
          </div>
          <div className="profile__details">
            <p className="name">Tricia Dove</p>
            <span>Local Account</span>
          </div>
        </div>
        <nav className="navigation">
          <Link to="/user/appointment" className="navigation__items">
            <span>
              <FaBookMedical />
            </span>
            <p>Book an Appointment</p>
          </Link>
          <Link to="/user/records" className="navigation__items">
            <span>
              <FaFileMedical />
            </span>
            <p>View Medical Records</p>
          </Link>
          <Link to="/user/history" className="navigation__items">
            <span>
              <RiHistoryFill />
            </span>
            <p>History</p>
          </Link>
          <Link to="/user/notification" className="navigation__items">
            <span>
              <IoMdNotifications />
            </span>
            <p>Notification</p>
          </Link>
          <Link to="/user/settings" className="navigation__items">
            <span>
              <IoSettingsSharp />
            </span>
            <p>Settings</p>
          </Link>
          <Link to="/user/edit-profile" className="navigation__items">
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
