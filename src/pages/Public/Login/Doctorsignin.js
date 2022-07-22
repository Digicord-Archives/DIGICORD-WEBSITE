import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import axios from 'axios'
import '../SignUp/SignUp.css'
import { FcGoogle } from 'react-icons/fc'
import { FaFacebook } from 'react-icons/fa'


const Doctorsignin = () => {
  const [formValid, setFormValid] = useState(false);
  const [login, setLogin] = useState('')

  const navigate = useNavigate();

  const [form, setForm] = useState({
         
          email: "",
          password: ""
      });
  const {email,password} = form;
    useEffect(() => {
        if (
        form.email !== '' &&
        form.password !== '') 
        {
          setFormValid(true)
        } else {
          setFormValid(false)
        }
  }, [form])
  
  const handlesubmit=(e) => {
    e.preventDefault();
    axios.post('https://digicord.herokuapp.com/api/v1/doctors/signin/',{email,password} )
    .then(response=>{
      if (response.data.message) {
        setLogin(response.data.message);
      } else {
      toast.success(`Welcome back ${response.data.first_name}`);
      return  setTimeout(()=>navigate('/doctor'),1500);
      }
    }).catch((err)=>toast.error(err.response.data.msg))
    
    }
   
    console.log(login)
      const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
  return (
    <div>
    <main className='signup-container doctor login-c'>
  <form className='form-container login' onSubmit={handlesubmit}>
    <div id="sign_up" style={{ width: '100%' }}>
      <h1 style={{ fontSize: '2.5em', fontWeight: '700', lineHeight: '50px', color: 'black', fontStyle: 'normal', margin: '0em 0em 1em 0em' }}>Welcome Back!</h1>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '150px', margin: '0em 0em 1em 0em' }}>
        <p style={{ color: '#9DA4A8', textAlign: 'center', fontSize: '1.25rem', fontFamily: 'Roboto', fontWeight: '500', lineHeight: '25px' }}>Login with your social media account</p> 

        <div style={{ fontSize: '1.1rem', width: '40%', height: '50px', display: 'flex', justifyContent: 'space-between', margin: '1.5em 0em 1em 0em' }}>
          <FcGoogle style={{ fontSize: '2.5rem' }}/>
          <FaFacebook style={{ color: 'navy', fontSize: '2.5rem' }}/>
        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', color: '#9DA4A8', height: '20px' }}>
          <hr style={{ width: '35%', marginTop: '0.6em' }} />
          <p>Or</p>
          <hr style={{ width: '35%',marginTop: '0.6em' }}/>
        </div>
      </div>

      <div className='house'>
        <label  className='label' for="email-address">EMAIL</label>
        <input type="email" name="email"  id="email-address" onChange={handleChange} placeholder='Enter Email' className='input-container'/>
      </div>
      <div className='house'>
        <label  className='label' for="password">PASSWORD</label>
        <input type="password" name="password"  id="password" onChange={handleChange} placeholder='Enter Password' className='input-container'/>
      </div>
      <div style={{ width: '100%', height: '50px', margin: '0.5em 0em 0.5em 0em', display: 'flex', justifyContent: 'space-between', color: 'grey' }}>
          <div style={{ width: '70%', height: '40px', display: 'flex', justifyContent: 'flex-start', color: 'grey',margin: '0.5em 0em 0.5em 0em' }}>
            <input type='checkbox' style={{ border: 'lightgrey', borderRadius: '8px' }} /> 
            <p style={{ margin: '0.6em 0em 0.6em 0.5em' }}>Remember Me</p>
          </div>
          <p style={{ margin: '1em 0em' }}>Forgot Password?</p>
      </div>
    </div>
    <div className='house'>
      <input class="b ph3 pv2 input-reset center ba b--black bg-transparent grow pointer f6 flex" 
       className= {formValid?"auth_signup-active":"input-container submit doctor-s"} type="submit" value="Sign in" disabled={!formValid}/>
       <p style={{ margin: '0.5em 0em', fontSize: '0.9rem', alignSelf: 'center' }}>By logging in, you agree to Digicord's Terms of Use and Privacy Policy.</p>
      </div>
    </form>
  </main>
    <h1 className='tc'>{login}</h1>
    </div>
  )
}

export default Doctorsignin