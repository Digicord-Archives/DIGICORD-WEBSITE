import React from 'react';
import './Landingsection5.css';

const Landingsection5= () => {

	return (
			<>
			<div className='section5'>
				<h1>
						Subscribe To Our Newsletter
				</h1>

				<div className='Newsletter'>
					<input  name="email" type="email" className="emails" placeholder="Enter your Email Address"  />
					<button type="submit" className='submit-class'>Subscribe</button>
				</div>
			</div>
			</>
    )
     }

export default Landingsection5;