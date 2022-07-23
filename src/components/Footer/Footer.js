import React from "react";
import logoWhite from "../../assets/images/logoWhite.png";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections-wrapper">
        <div className="footer-sections one">
          <Link to="/">Privacy</Link>
          <Link to="/">Terms of Use</Link>
          <Link to="/">Help Center</Link>
          <Link to="/">FAQs</Link>
          <Link to="/">Do Not Sell My Personal Information</Link>
          <Link to="/">Feedback</Link>
        </div>
        <div className="footer-sections two">
          <div className="section-two__links">
            <img src={logoWhite} alt="digicord logo" />
            <Link to="/">About Digicord</Link>
            <Link to="/">Partner Program</Link>
            <Link to="/">Career</Link>
            <Link to="/">Integrate with Us</Link>
            <Link to="/">Learn</Link>
          </div>
          <div className="section-two__links tops">
            <h3>Get in Touch</h3>
            <Link to="/">Contact</Link>
            <Link to="/">Demo</Link>
            <Link to="/">Login</Link>
            <Link to="/">Help Center</Link>
            <Link to="/">Community</Link>
          </div>
          <div className="section-two__links tops">
            <h3>Learn</h3>
            <Link to="/">Expert Intelligence</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Resource</Link>
          </div>
        </div>
        <div className="footer__copyright-section">
          <div className="copyright-section__left">
            © 2022 All Right Reserved. Digicord is made by xxxxxxxxxxxxxxx
          </div>
          <div className="copyright-section__links ">
            <Link to="/" className="copyright-section__link">
              <FaFacebookF />
            </Link>
            <Link to="/" className="copyright-section__link">
              <FaLinkedinIn />
            </Link>
            <Link to="/" className="copyright-section__link">
              <FaTwitter />
            </Link>
            <Link to="/" className="copyright-section__link">
              <FaGooglePlusG />
            </Link>
            <Link to="/" className="copyright-section__link">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
