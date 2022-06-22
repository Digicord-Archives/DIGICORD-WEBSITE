import React from 'react'
import Landing_section1 from '../Section/Landing_section1/Landing_section1'
import Landing_section2 from '../Section/Landing_section2/Landing_section2'
import Landing_section3 from '../Section/Landing_section3/Landing_section3'
import Landing_section4 from '../Section/Landing_section4/Landing_section4'
import Landing_section5 from '../Section/Landing_section5/Landing_section5'
import { Container } from 'react-bootstrap'

const Landing = () => {
  return (
   <Container>
      <Landing_section1/>
      <Landing_section2/>
      <Landing_section3/>
      <Landing_section4/>
      <Landing_section5/>
   </Container>
  )
}

export default Landing