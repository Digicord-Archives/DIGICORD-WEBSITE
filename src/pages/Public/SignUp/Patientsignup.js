import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'




const initialState = {
    first_name:"",
    last_name:"",
    email:"",
    password:"",
    confirmPassword:"",
    age:"",
    phone_number:"",
    location:"",
    sex:""
}

const Patientsignup = () => {
	
	const [user, setUser] = useState(initialState);
    const {first_name, last_name, email,password,confirmPassword,age,phone_number,location,sex} = user;
    const navigate = useNavigate();

	const handleChange =(e)=>{
		const {name,value} = e.target;
		setUser({...user,[name]:value});
	}

	const submitform =async(e)=>{
		e.preventDefault();
	if(!first_name ||!last_name ||!password||!confirmPassword||!age||!phone_number||!location||!sex) {
	  toast.error('input value into each fields');
	}else {
	await axios.post('https://digicord.herokuapp.com/api/v1/patients/signup',{first_name,last_name,email,password,confirmPassword,age,phone_number,location,sex
	  }).then((response)=>{
		setUser(response.data);
        toast.success(`Welcome  ${response.data.first_name}`);
	setTimeout(()=>navigate('/user'),500);
	  }).catch((err)=>toast.error(err.response.data.msg));
	  } 
	}
	
	
  return (
    <div>
    <div class="bg-blue h-100">

	<div class="pv4 mid-gray sans-serif">
		<div class="w-90 w-80-m w-50-l center cf cover bg-top bg-center shadow-1 bg-light-gray">

			<div class="w-80 w-70-m w-60-l fr bg-white">
					<h1 class="b ma0 f3">Sign Up</h1>
				<form id="register-form" action="" class="ph3 pt3 pb4 f7 flex flex-wrap mr2 items-center justify-center " onSubmit={submitform}>
					<div class="mb3">
						<label for="" class="db ttu b lh-copy ">Firstname</label>
						<input name="first_name" type="text" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray " value={first_name} onChange={handleChange}/>
					</div>
					<div class="mb3">
						<label for="" class="db ttu b lh-copy ">Lastname</label>
						<input name="last_name" type="text" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray " value={last_name} onChange={handleChange}/>
					</div>
					<div class="mb4">
						<label for="" class="db ttu b lh-copy">Email</label>
						<input name="email" type="email" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={email} onChange={handleChange}/>
					</div>
					<div class="mb3">
						<label for="" class="db ttu b lh-copy">Password</label>
						<input name="password" type="password" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={password} onChange={handleChange} />
					</div>
					<div class="mb3">
						<label for="" class="db ttu b lh-copy">Comfirm Password </label>
						<input name="confirmPassword" type="password" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={confirmPassword} onChange={handleChange} />
					</div>
					<div class="mb4">
						<label for="" class="db ttu b lh-copy">Sex</label>
						<input name="sex" type="sex" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={sex} onChange={handleChange} />
					</div>
					<div class="mb3">
						<label for="" class="db ttu b lh-copy">Age</label>
						<input name="age" type="text" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={age} onChange={handleChange}/>
					</div>
					<div class="mb3">
						<label for="" class="db ttu b lh-copy">Phone Number</label>
						<input name="phone_number" type="phone" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={phone_number} onChange={handleChange} />
					</div>
					<div class="mb4">
						<label for="" class="db ttu b lh-copy">Location</label>
						<input name="location" type="text" class="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" value={location} onChange={handleChange} />
					</div>
					<div class="mb3 tc f6">
					<input type="submit" value="Sign Up" class="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" />
						<div class="tc">
		
						Do you have an account? <a href="h" class="blue ph1">Log In Now!</a>
					</div>
					</div>
					
				</form>
			</div>
		</div>
	</div>

</div>
    </div>
  )
}

export default Patientsignup