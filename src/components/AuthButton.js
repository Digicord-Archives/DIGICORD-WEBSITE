import React from 'react'
import { Link } from 'react-router-dom'
import ModalComp from './modal/ModalComp'

const AuthButton = ({ text,styled, show, handleShow, setShow}) => {
  return (
    <div className="btn-wrapper">
            <Link to="/" className={styled} onClick={handleShow}>
              {text}
              {show && <ModalComp show={show} setShow={setShow} text={text}/>}
            </Link>
    </div>
  )
}

export default AuthButton