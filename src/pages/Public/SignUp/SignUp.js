import React from 'react'
import{Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div  className="flex mw5 mw7-ns center bg-light-gray pa3 ph5-ns justify-around mt3 items-center">
    <div  className="">
    <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" alt='f'/>
    <h1 class="f3 mb2">Mimi W.</h1>
    <Link to="/signup_d">
    <h2 class="f5 fw4 gray mt0">REGISTER AS DOCTOR</h2>
    </Link>
  </div>
</article>
    </div>  
    <div  className="">
    <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you" alt='f'/>
    <h1 class="f3 mb2">Mimi W.</h1>
    <Link to="/signup_p">
    <h2 class="f5 fw4 gray mt0">REGISTER AS PATIENT</h2>
    </Link>
    
  </div>
</article>
    </div>  
    </div>
  )
}

export default SignUp


