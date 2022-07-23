import React from 'react';
import './Landing-section4.css';
import Doctor from '../../../../../assets/images/doctor.png';
import Patient from '../../../../../assets/images/patient.png';


const Landingsection4 = () => {
  return (
    <div className='Section4'>
      <div className='title'>
        <h1 className='about-header'>A Little Bit <span className='about-header' style={{color: 'navy'}}>About Us</span> </h1>
        <h6>Digicord is an Electronic Medical record that gives users easy access to quality healthcare and every Health Professional the best tools needed to discharge their duties.</h6>
      </div>
      <div className='section-container sec1'>
        <div className='content-container'>
          <h2 className='header h1'>
            FOR DOCTORS
          </h2>

          <p className='content c1'>
          Digicord gives healthcare providers a comprehensive technology solution dedicated to managing every aspect of healthcare delivery, from keeping electronic medical records of their patients record and telemedicine, to administration and scheduling of appointment.
          </p>
        </div>

        <div className='illustration-container'>
          <img src={Doctor} alt='For Doctors' className='img2' />
        </div>
      </div>

      <div className='section-container'>
        <div className='illustration-container'>
          <img src={Patient} alt='For Patients' className='img' />
        </div>

        <div className='content-container'>
          <h2 className='header h2'>
            FOR PATIENTS
          </h2>

          <p className='content c2'>
          Don’t relent on your healthcare with our patient solutions. View your personal health records, treatment plan and prescriptions with lab results.
          </p>

          <p className='content c3'>
          Connect with your registered hospital via telemedicine, find new healthcare providers, and schedule your hospital appointments from the comfort of your home. 
          </p>
        </div>

      </div>
    </div>
  )
}

export default Landingsection4