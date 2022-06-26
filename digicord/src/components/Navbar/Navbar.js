import React from "react";
import { Link, NavLink } from "react-router-dom";

import { HiMenuAlt2 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";

import Logo from "../../assets/images/logo.png";

import "./Navbar.css";

const Navbar = () => {
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
          <div className="search-input">
            <FiSearch />
            <input type="text" className="search" placeholder="Search" />
          </div>
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

        <button className="menu-btn">
          <HiMenuAlt2 />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

const MobileNavbar = () => {
  return (
    <div className="mobile-navbar">
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
    </div>
  );
};
