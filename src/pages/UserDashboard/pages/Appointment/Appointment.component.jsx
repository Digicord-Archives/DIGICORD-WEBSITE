import React, { useEffect } from "react";
import './Appointment.style.css'

const Appointment = ({ setHeader }) => {
  useEffect(() => {
    setHeader(<h1>Book An Appointment</h1>);
  }, [setHeader]);
  return <div>Appointment</div>;
};

export default Appointment;
