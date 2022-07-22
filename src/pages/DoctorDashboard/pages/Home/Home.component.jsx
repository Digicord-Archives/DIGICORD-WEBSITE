import React, { useEffect } from "react";

import userDoctor from "../../../../assets/images/undraw_doctors_hwty2.png";
import doctorIcon from "../../../../assets/images/Vector.png";

import "./Home.styles.scss";

const Home = ({ setHeader }) => {
  useEffect(() => {
    setHeader(
      <h1 className="dashboard__header">
        <img src={doctorIcon} alt="" /> Doctor Dashboard
      </h1>
    );
  }, [setHeader]);
  return (
    <div className="doctorHome">
      <div className="imageWrapper">
        <img src={userDoctor} alt="a doctor" />
      </div>
      <div className="welcomeText">
        <h1>What would you like to do Doc?</h1>
      </div>
    </div>
  );
};

export default Home;
