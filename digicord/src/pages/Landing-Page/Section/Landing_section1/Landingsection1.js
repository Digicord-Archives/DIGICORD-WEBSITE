import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import pic1 from '../../../../assets/images/pic1.png';

const Landingsection1 = () => {
  return (
    <>
      <Container className='container' sytle={{background:'#E4FEEF'}}>
        <Row className='sm' style={{display:'flex'}}>
          <Col>
            <div className='lhs'>
              <h2>A Better Way To Book <br /><span style={{color:'#09017E'}}>Appointments</span> And Stay <br />Connected With <span style={{color:'#09017E'}}>Doctors</span></h2>
              <Button href='/' className='btn'>Let’s get you started</Button>
            </div>
          </Col>

          <Col>
          <div className='rhs'>
              <img src={pic1} alt='sideimage' />
          </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Landingsection1