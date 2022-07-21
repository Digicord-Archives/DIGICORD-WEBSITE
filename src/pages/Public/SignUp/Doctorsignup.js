import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'
import './SignUp.css'



const initialState = {
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    confirmPassword:"",
    specialization:"",
    phone_number:"",
    location:"",
    sex:""
}

const Doctorsignup = () => {
	
	const [user, setUser] = useState(initialState);
    const {first_name, last_name, email,password,confirmPassword,specialization,phone_number,location,sex} = user;
    const navigate = useNavigate();

	const handleChange =(e)=>{
		const {name,value} = e.target;
		setUser({...user,[name]:value});
	}

	const submitform =async(e)=>{
		e.preventDefault();
	if(!first_name ||!last_name ||!password||!confirmPassword||!specialization||!phone_number||!location||!sex) {
	  toast.error('input value into each fields');
	}else {
	await axios.post('https://digicord.herokuapp.com/api/v1/doctors/signup',{first_name,last_name,email,password,confirmPassword,specialization,phone_number,location,sex
	  }).then((response)=>{
		setUser(response.data);
		toast.success(`Welcome ${response.data.first_name}`);
	setTimeout(()=>navigate('/doctor'),500);
	  }).catch((err)=>toast.error(err.response.data.msg));
	  } 
	}
	
	
  return (
    <div>
		<div className='signup-container doctor'>

			<div className='form-container'>
					<h1 style={{ fontSize: '2.5em', fontWeight: '700', lineHeight: '80px', color: '#060074', fontStyle: 'normal' }}>Create an Account</h1>
				<form id="register-form" action="" style={{ width: '100%' }}  onSubmit={submitform}>
					<div className='house'>
						<label for="" className='label'>Firstname</label>
						<input name="first_name" type="text" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray " value={first_name} onChange={handleChange} placeholder='Enter your First Name' className='input-container'/>
					</div>
					<div className='house'>
						<label for="" className='label'>Lastname</label>
						<input name="last_name" type="text" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray " value={last_name} onChange={handleChange} placeholder='Enter your Last Name' className='input-container'/>
					</div>
					<div className='house'>
						<label for="" className='label'>Email</label>
						<input name="email" type="email" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={email} onChange={handleChange} placeholder='Enter Email' className='input-container'/>
					</div>
					<div className='house'>
						<label for="" className='label'>Password</label>
						<input name="password" type="password" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={password} onChange={handleChange} placeholder='Enter Password' className='input-container'/>
					</div>
					<div className='house'>
						<label for="" className='label'>Comfirm Password </label>
						<input name="confirmPassword" type="password" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={confirmPassword} onChange={handleChange} placeholder='Confirm Password' className='input-container'/>
					</div>
					<div className='age-container'>
						<div  className='age'>
							<label htmlFor="" className='label'>LOCATION</label>
							<input name="location" type="text" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={location} onChange={handleChange} className='input-container small' placeholder='Enter your Location'
						/>
						</div>

						<div className='age'>
							<label htmlFor="" className='label'>SEX</label>
							<input name="sex" type="text" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={sex} onChange={handleChange} className='input-container small' placeholder='Enter your Sex' />
						</div>
					</div>
					<div className='house'>
						<label for="" className='label'>Specialization</label>
						<input name="specialization" type="text" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={specialization} onChange={handleChange} placeholder='Enter Specialization' className='input-container'/>
					</div>
					<div className='house'>
						<label for="" className='label'>Phone Number</label>
						<input name="phone_number" type="phone" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={phone_number} onChange={handleChange} placeholder='Enter Phone Number' className='input-container'/>
					</div>
				
					<div className='house'>
					<input type="submit" value="Create an Account"	className='input-container submit doctor-s'/>
						<div  style={{
								display:'flex', justifyContent: 'center', textAlign: 'center', marginTop: '0.5em', width: '100%', marginBottom: '0'
						}}>
		
					<p  style={{
							textDecoration: 'underline', color: 'black', fontSize: '0.8rem'
						}}>	Already have an account?</p>
						 <a href="/#" style={{ textDecoration: 'none', fontSize: '0.85rem', color: '#060074' }}>Sign In</a>
					</div>
					<p style={{ margin: '0.5em 0em', fontSize: '0.9rem', alignSelf: 'center' }}>By logging in, you agree to Digicord's Terms of Use and Privacy Policy.</p>
					</div>
					
				</form>
			</div>
		</div>
	</div>
  )
}

export default Doctorsignup