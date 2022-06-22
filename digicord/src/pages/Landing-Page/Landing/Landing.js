import React from 'react';
import Landingsection1 from '../Section/Landing_section1/Landingsection1';
import Landingsection2 from '../Section/Landing_section2/Landingsection2';
import Landingsection3 from '../Section/Landing_section3/Landingsection3';
import Landingsection4 from '../Section/Landing_section4/Landingsection4';
import Landingsection5 from '../Section/Landing_section5/Landingsection5';
import { Container } from 'react-bootstrap';
import './Landing.css';

const Landing = () => {
  return (
   <Container>
      <Landingsection1/>
      <Landingsection2/>
      <Landingsection3/>
      <Landingsection4/>
      <Landingsection5/>
   </Container>
  )
}

export default Landing