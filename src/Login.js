import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { auth } from './firebase'
import "./Login.css"
function Login() {
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const history = useHistory();
  const signIn=
   e=>{
     e.preventDefault()
     auth.signInWithEmailAndPassword(email,password).then((auth)=>{
      console.log(auth);
      if(auth){
        history.push("/")
      }
    })
    .catch(error=>alert(error.message))
     
  }
  const register = e =>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
      console.log(auth);
      if(auth){
        history.push("/")
      }
    })
    .catch(error=>alert(error.message))
  }
  return (
    <div className='login'>
        <Link to = "/">
        <img className='login__Logo' src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'/>
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=> setEmail( e.target.value)} />
                <h5>Password</h5>
                <input  value={password} onChange={e=> setpassword( e.target.value)} type="password"/>
                <button onClick={signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>


        </div>
       
    </div>
  )
}

export default Login