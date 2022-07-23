import React, { useEffect } from 'react'
import userImg from '../../../../assets/images/Ellipse 23.png'
import './medical-hygeine.css'

const MedicalHygeine = ({setHeader}) => {
  useEffect(() => {
    setHeader(<h1>View Medical Records</h1>);
  }, [setHeader]);

  return (
    <div className='mcontainer'>
      <p>Display Information</p>
      <div class="wrapper1">
        <div className="flex">
          <div className="containerImg">
            <img src={userImg} className='userImg' alt="userImg" />
            <div className="containerSm">
              <h5>Patient ID</h5>
              <p>PUT-MED1678IKJ</p>
            </div>
          </div>
          <div className="containerSm ml">
            <h5>Patient Name</h5>
            <p>Adeyemi Johnson</p>
          </div>
        </div>
      </div>
      {/* end of first div */}
      {/* start of second div */}
      <div className="wrapper1">
        <p className="mtitle">BIO DATA</p>
        <div className="wrap">
          <div className="line-info">
            <h5 className='bold'>Name : </h5>
            <p>- Adeyemi Johnson</p>
          </div>
          <div className="line-info">
            <h5 className='bold'>Age : </h5>
            <p>- 39 years</p>
          </div>
          <div className="line-info">
            <h5 className='bold'>Sex :  </h5>
            <p>- Male</p>
          </div>
          <div className="line-info">
            <h5 className='bold'>Occupation :  </h5>
            <p>- Teacher</p>
          </div>
          <div className="line-info">
            <h5 className='bold'>Marital Status :  </h5>
            <p>- Married</p>
          </div>
        </div>
      </div>
      {/* end of second div */}
      {/* start of 3rd div */}
      <div className="wrapper1">
        <p className="mtitle">CLINICALS</p>
          <div className="wrap">
            <p>First Consultation</p>
            <div className="line-info">
              <h5 className='bold'>Blood Pressure :  </h5>
              <p>- 120/80mmHg</p>
            </div>
            <div className="line-info">
              <h5 className='bold'>Temperature : </h5>
              <p>- 35.5”c</p>
            </div>
            <div className="line-info">
              <h5 className='bold'>Weight :   </h5>
              <p>- 75kg</p>
            </div>
          </div>
      </div>
      {/* End of 3rd */}
      {/* start of 4th */}
      <div className="wrapper1">
      <p className="mtitle">DIAGNOSIS AND TESTS</p>
        <div className="wrap">
          <div className="line-info">
            <h5 className='bold'>Date : </h5>
            <p>- 01-01-2022</p>
          </div>
          <div className="line-info">
            <h5 className='bold'>Diagnosis: </h5>
            <p>- Thyphiod fever <br />
- Early rheumatized arthritis</p>
          </div>
          <div className="line-info">
            <h5 className='bold'>Lab Test :  </h5>
            <p>- Urine test +ve <br />
- Blood test</p>
          </div>
        </div>
      </div>
      {/* end of 4th */}
      {/* start 0f 5th */}
      <div className="wrapper1">
        <p className="mtitle">DRUG PRESCRIPTION</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ratione aspernatur cum atque voluptatum possimus distinctio sequi quidem nostrum earum fuga doloribus iste sunt ipsa, molestiae architecto in neque! Pariatur?</p>
      </div>
      <button type='submit' className='mbutton'>Download</button>
      <div className="wrapper1">
        <p className='mtitle'>Request for medical records</p>
        <div className="wrapper2">

        </div>
        <div className="wrapper2"></div>
        <button type='submit' className='mbutton'>Request for transfer</button>
      </div>
    </div>
  )
}

export default MedicalHygeine