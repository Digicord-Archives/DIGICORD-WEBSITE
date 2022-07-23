import React from 'react';
import './landingsection2.css'
import image1 from './../../../../../assets/images/rafiki.png';
import image2 from './../../../../../assets/images/undraw_domain_names_re_0uun 1.png';
import image3 from './../../../../../assets/images/pana.png';

const Landingsection2 = () => {
  return (
    <div className='section2-container'>
      <h1>How It Works</h1>
      <p>You are just a few clicks away from healthcare you can trust.</p>

      <div className="box-container">
        <div className="box">
          <img src={image1} alt="Book appointment" />
          <p>Book an Appointment.</p>
        </div>
        <div className="box">
          <img src={image2} alt="Search hospital, doctor" />
          <p>Search for your favourite hospital and doctor.</p>
        </div>
        <div className="box">
          <img src={image3} alt="Connect by appointments" />
          <p>We connect with your hospital and doctors, by booking appointment.</p>
        </div>
      </div>
    </div>
  )
}

export default Landingsection2