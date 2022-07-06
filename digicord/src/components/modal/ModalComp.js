import React from 'react'
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import './modal.css'

const ModalComp = ({text, show, setShow}) => {
  return (
    <div onClick={e => e.stopPropagation()}>
      <Modal show={show} onHide={()=>setShow(false)} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
          <Modal.Header className="modalHeader px-4" closeButton>
          <Modal.Title className="ms-auto">{text} As:</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-grid gap-2 px-4">
          <Button variant="success" className="patientButton mb-3" size="lg">
            PATIENT
          </Button>
          <Button variant="primary" className="doctorButton py-2" size="lg">
            DOCTOR
          </Button>
          </Modal.Body>
      </Modal>
    </div>
  )
}

export default ModalComp