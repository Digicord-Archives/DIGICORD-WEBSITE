import React from 'react';
import './Landingsection5.css';

const Landingsection5= () => {

	return (
			<>
			<div className='section5'>
				<h1>
						Subscribe To Our Newsletter
				</h1>

				<form className='Newsletter'>
					<input  name="email" type="email" className="input-class" placeholder="Enter your Email Address"  />
					<button type="submit" className='submit'>Subscribe</button>
				</form>
			</div>
			</>
    )
     }

export default Landingsection5;