import React from 'react'
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import './modal.css'
import { MdOutlineCancel } from 'react-icons/md'
import ReactDOM from 'react-dom';
// import{Link} from 'react-router-dom'

const ModalComp = (props) => {
  if(!props.opened) return null
  return ReactDOM.createPortal (
   <>
    <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.4)', zIndex: '1000' }}>
      <div style={{position: 'fixed', top: '15%', left: '33.5%', backgroundColor: '#F6FDFF', padding: '1.8125em 3.1875em 1.5625em', zIndex: '1000', color: 'black', borderRadius: '8px', height: '350px', width: '33%'}}>
          <div style={{ display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center', height: '300px' }}>
            <div style={{display: 'flex', justifyContent: 'flex-end', textAlign: 'end', width: '100%', fontSize: '1.5rem'}}>
                <MdOutlineCancel onClick={props.onClosed} />
              </div>
              <h1 style={{
                fontWeight: '700',
                fontSize: '2.25rem',
                lineHeight: '50px',
                margin: '0em 0em 0.35em 0em',
                color: '#212529'
              }}>
                Login As:
              </h1>
              <Button variant="success" style={{ borderRadius: '10px', padding: '0.75em 0 0.75em 0', fontSize: '1.1rem', width: '100%', backgroundColor: '#008037', color: 'white', border: '2px solid #008037' , margin: '0.6em 0 0.6em 0'}} size="lg">
                <a href={props.patientLogin} style={{ textDecoration: 'none', color: 'white', fontWeight: '700'}}>
                PATIENT
                </a>
            </Button>
            <Button variant="primary" style={{ borderRadius: '10px', padding: '0.75em 0 0.75em 0', fontSize: '1.1rem', width: '100%', backgroundColor: '#060074', color: 'white', border: '2px solid #060074' , margin: '0.6em 0 0.6em 0'}} size="lg">
              <a href={props.doctorLogin} style={{ textDecoration: 'none', color: 'white', fontWeight: '700'}} >
              DOCTOR
              </a>
            </Button>
          </div>
      </div>
    </div>
   </>,
   document.getElementById('portal')
  )
}

export default ModalComp