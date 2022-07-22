import React,{useEffect} from 'react'
import{FaUser, FaQuestionCircle, FaMoon} from 'react-icons/fa'
import './settings.css'

const Settings = ({setHeader}) => {
    useEffect(() => {
        setHeader(<h1>Settings</h1>);
      }, [setHeader]);
  return (
    <section className='user-setting'>
        <div className="setting-options">
            <p>Profile</p>
            <FaUser className='icon'/>
        </div>
        <div className="setting-options">
            <p>Dark or normal mode</p>
            <FaMoon className='icon translate'/>
        </div>
        <div className="setting-options">
            <p>Help and support</p>
            <FaQuestionCircle className='icon'/>
        </div>
    </section>
  )
}

export default Settings