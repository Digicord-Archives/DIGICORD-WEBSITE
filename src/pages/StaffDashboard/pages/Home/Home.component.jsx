import React, { useEffect } from "react";

import userDoctor from "../../../../assets/images/undraw_doctors_hwty.png";

import "./Home.styles.scss";

const Home = ({ setHeader }) => {
  useEffect(() => {
    setHeader(<h1 className="dashboard__header">Staff Dashboard</h1>);
  }, [setHeader]);
  return (
    <div className="doctorHome">
      <div className="imageWrapper">
        <img src={userDoctor} alt="a doctor" />
      </div>
      <div className="welcomeText">
        <h1>What would you like to do?</h1>
      </div>
    </div>
  );
};

export default Home;
