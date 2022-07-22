import React, {useState} from 'react';
import {Col, Row, Button, Container} from 'react-bootstrap'
import VideoModal from '../../../../../components/Video-Modal/VideoModal';

const Landingsection6 = () => {
  const [IsVideoModalOpen, setIsVideoModalOpen] = useState(false);
  return (
    <>
      <Container className='container'>
        <Row className='sm' style={{display:'flex', backgroundColor:'#E4FEEF'}}>
          <Col>
            <div className='text'>
              <h2 style={{color:'#09017E',margin: '0em 0em 1.5em 0em'}}>See How Digicord Is Making Doctors And <br /> Patients Lives Easier</h2>
              <Button href='/#' className='btn' onClick={() => setIsVideoModalOpen(true)}>Watch Video</Button>
           <VideoModal videoopen={IsVideoModalOpen} onvideoClosed={() => setIsVideoModalOpen(false)} />
            </div>
          </Col>
          </Row>
      </Container>
      
    </>
  )
}

export default Landingsection6