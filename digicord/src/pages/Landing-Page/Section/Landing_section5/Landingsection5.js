import React from 'react'
import './Landingsection5.css';
// {/* <meta name="viewport"
// content="width=device-width,
// initial scale= 1"/>  */}

const Landingsection5= () => {

	return (
		
		// <p>Subscribe to our Newsletter</p>
    	<form>
		<h1>
			Subscribe To Our Newsletter
		</h1>
	   <div className='wrapper'>
	    <div className='Newsletter'>
      <input type="text" className="input" placeholder="Enter your Email Address">
		</input>
		<button type="submit" className='submit'>Subscribe</button>
        </div>
    </div>
		</form>
  
    )
     }

export default Landingsection5;