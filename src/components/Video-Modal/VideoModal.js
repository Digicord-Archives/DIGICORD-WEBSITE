import React from 'react'
import ReactDOM from 'react-dom';
import { MdOutlineCancel } from 'react-icons/md';
import digicord from '../../assets/videos/DIGICORD.mp4';

const VideoModal = (props) => {
  if(!props.videoopen) return null
  return ReactDOM.createPortal (
   <>
    <div style={{ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: '1000' }}>
      <div style={{position: 'fixed', top: '15%', left: '22.5%', backgroundColor: '#F6FDFF', padding: '1.8125em 3.1875em 1.5625em', zIndex: '1000', color: 'black', borderRadius: '8px', height: '500px', width: '55%'}}>
          <div style={{ display: 'flex',flexDirection: 'column',justifyContent: 'center',alignItems: 'center', height: '425px' }}>
            <div style={{display: 'flex', justifyContent: 'flex-end', textAlign: 'end', width: '100%', fontSize: '1.5rem'}}>
                <MdOutlineCancel onClick={props.onvideoClosed} />
              </div>

              <div style={{width: '100%', height: '100%', margin: '0.5em'}}>
                <video src={digicord} controls autoplay  style={{width:'100%', height: '100%'}}></video>
              </div>
        
            
          </div>
      </div>
    </div>
   </>,
   document.getElementById('portal')
  )
}

export default VideoModal