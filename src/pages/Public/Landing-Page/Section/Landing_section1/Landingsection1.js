import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import pic1 from '../../../../../assets/images/pic1.png';

const Landingsection1 = () => {
  return (
    <>
      <Container className='container' sytle={{backgroundColor:'#E4FEEF', margin: '0px', width: '100%'}}>
        <Row className='sm' style={{display:'flex'}}>
          <Col>
            <div className='lhs'>
              <h2>A Better Way To Book <br /><span className='span' style={{color:'#09017E', fontSize: '2.5rem'}}>Appointments</span> And Stay <br />Connected With <span className='span' style={{color:'#09017E', fontSize: '2.5rem'}}>Doctors</span></h2>
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