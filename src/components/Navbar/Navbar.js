import React, { useRef, useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { HiMenuAlt2 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import Logo from "../../assets/images/logo.png";

import "./Navbar.css";
import AuthButton from "../AuthButton";

const Navbar = () => {
  console.log(window.innerWidth)
  const mobileNavbarRef = useRef(null);
  const searchRef = useRef(null);
  const searchWrapperRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (isOpen) {
      mobileNavbarRef.current.style.padding = "1.5rem 1.5rem 4rem 1.5rem";
      mobileNavbarRef.current.style.height =
        mobileNavbarRef.current.scrollHeight + 72 + "px";
    } else {
      mobileNavbarRef.current.style.height = "0px";
      mobileNavbarRef.current.style.padding = "0 0";
    }
  }, [isOpen]);

  useEffect(() => {
    if (window.innerWidth <= 1240 && isSearchOpen) {
      console.log("open search");
      searchRef.current.style.width = "120px";
      searchRef.current.focus();
      searchWrapperRef.current.style.border = "1px solid #09017e";
    } else if (window.innerWidth <= 1240 && !isSearchOpen) {
      console.log("close search");
      searchRef.current.style.width = "0px";
      searchWrapperRef.current.style.border = "0px";
    }
  });
  return (
    <header>
      <div className="navbar">
        <div className="logo-wrapper ">
          <img src={Logo} alt="digicord logo" />
        </div>
        <div className="nav-links-wrapper">
          <nav>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active" : "")}
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="search-wrapper">
          <div ref={searchWrapperRef} className="search-input">
            <FiSearch onClick={() => setIsSearchOpen(!isSearchOpen)} />
            <input
              ref={searchRef}
              type="text"
              className="search"
              placeholder="Search"
            />
          </div>
          <div className="menut-btn-wrapper">
            <button className="menu-btn" onClick={() => [setIsOpen(!isOpen)]}>
              <HiMenuAlt2 />
            </button>
          </div>
        </div>

        <div className="navbar-actions">
          {/* <div className="btn-wrapper">
            <Link to="/" className="login" onClick={handleShow}>
              Login
              {show && <ModalComp show={show} setShow={setShow} text= "Login"/>}
            </Link>
          </div> */}
          <AuthButton show={show} styled='login' text= 'Login' handleShow={handleShow} setShow={setShow}/>
          <AuthButton show={show} styled='signup' text= 'Sign up' handleShow={handleShow} setShow={setShow}/>
          {/* <div className="btn-wrapper">
            <Link to="/" className="signup" onClick={handleShow}>
              Sign Up
              {show && <ModalComp show={show} setShow={setShow} text= "Sign Up"/>}
            </Link>
          </div> */}
        </div>
      </div>
      <MobileNavbar
        mobileNavbarRef={mobileNavbarRef}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </header>
  );
};

export default Navbar;

const MobileNavbar = ({ mobileNavbarRef, isOpen, setIsOpen }) => {
  return (
    <div ref={mobileNavbarRef} className="mobile-navbar">
      <div className="closeBtn">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <IoMdClose />
        </button>
      </div>
      <div className="nav-links-wrapper">
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/about"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/services"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/contact"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar-actions">
        <div className="btn-wrapper">
          <Link to="/" className="login">
            Login
          </Link>
        </div>
        <div className="btn-wrapper">
          <Link to="/" className="signup">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};
