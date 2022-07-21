import React from 'react';
import '../SignUp/SignUp.css';

const PatientForgotPassword = () => {
  return (
   <>
     <div className='signup-container'>
      <div className='form-container for'>
      <h1 style={{ fontSize: '2.5em', fontWeight: '700', lineHeight: '50px', color: 'black', fontStyle: 'normal', margin: '0em 0em 0em 0em' }}>
        Forgot Password
      </h1>
      <p style={{ margin: '5em 0em', fontSize: '1rem', border: '1px solid green' }}>Enter your registered email to recieve instructions on how to reset your password</p>
      </div>
    </div>
   </>
  )
}

export default PatientForgotPassword