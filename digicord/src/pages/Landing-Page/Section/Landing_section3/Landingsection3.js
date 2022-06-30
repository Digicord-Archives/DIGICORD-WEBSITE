import React from 'react'
import './Landingsection3.css';
import Airbnb from '../../../../assets/images/Airbnb.png'
const Landingsection3 = () => {
  return (  
    <div className='Section3'>
      <h1 className='header1'>
        Top Brands And Sponsors
      </h1>
        <div className='Logo-image'>
        <img alt="Airbnb blue logo" src={Airbnb}/>
        <img alt="Airbnb blue logo" src={Airbnb}/>
        <img alt="Airbnb blue logo" src={Airbnb}/>
        <img alt="Airbnb blue logo" src={Airbnb}/>
        </div>
      
    </div>
  )
}

export default Landingsection3