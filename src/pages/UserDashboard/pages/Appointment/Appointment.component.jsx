import React, { useEffect, useState } from "react";
import './Appointment.style.css'
import { IoIosArrowDown } from 'react-icons/io';

const Appointment = ({ setHeader }) => {
  useEffect(() => {
    setHeader(<h1>Book An Appointment</h1>);
  }, [setHeader]);

  const [ShowSpecialist, setShowSpecialist] = useState(false);
  const Specialist = () => {
    if (ShowSpecialist === true) {
      return  <div className='select'>
                <select name="hospital" className="select" id="hospital">
                  <option value="Select Specialist" disabled selected>Select Specialist</option>
                  <option value="Dentist">
                    <div className="option">
                    Dentist
                    </div></option>
                  <option value="Pharmacist">Pharmacist</option>
                  <option value="Oncologist">Oncologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Gynaecologist">Gynaecologist</option>
                  <option value="General Practitioner">General Practitioner</option>
                </select>
                <span className="custom-arrow">
                  <div className="icon"><IoIosArrowDown style={{color:'black', fontWeight: '600'}} /></div>
                </span>
            </div>
    }

    else{
      return null;
    }
  }

  return <>

    <div className="subtitle">
      <h3>Select a Specialist</h3>
      <i>Easy and fast</i>

    </div>

    <div className="book">
      <div className="book-container">
        <div className='select'>
            <select name="hospital" className="select" id="hospital" onClick={() => setShowSpecialist(true)}>
              <option value="Select Hospital" disabled selected>Select Hospital</option>
              <option className="option" value="Ikeja Teaching Hospital">Ikeja Teaching Hospital</option>
              <option value="Garki General Hospital">Garki General Hospital</option>
              <option value="Abuja Clinics">Abuja Clinics</option>
              <option value="Port-Harcourt Hospital">Port-Harcourt Hospital</option>
              <option value="Federal Medical Centre Owerri">Federal Medical Centre Owerri</option>
              <option value="UPTH">UPTH</option>
              <option value="St. Savior Medical Centre">St. Savior Medical Centre</option>
              <option value="Zanklyn Hospital">Zanklyn Hospital</option>
            </select>
            <span className="custom-arrow">
              <div className="icon"><IoIosArrowDown style={{color:'black', fontWeight: '600'}} /></div>
            </span>
        </div>
      </div>

      <div className="book-container">
          {
            Specialist()
          }
      </div>
    </div>
  </>;
};

export default Appointment;
