import React, { useState } from 'react'
import './login.css'

export default function Login() {
  const username="Jacob123";
  const password="password";

  const [usernameState,setUsernameState]=useState('');
  const [passwordState,setPasswordState]=useState('');
  const[loggedIn,setLoggin]=useState(false);

  function loggin(){
    if(usernameState===username && passwordState===password){
      setLoggin(true);
      alert('logged in');
    }else{
      setLoggin(false);
      alert('Incorrect Login details');
    }
  }
  return (
    
    <div className='LoginForm'>
        <h2>Login Form</h2>
        <label>username: </label>
        <input type='text' onChange={(event)=>{setUsernameState(event.target.value)}}/>
        <label>password: </label>
        <input type='password' onChange={(event)=>{setPasswordState(event.target.value)
          console.log(passwordState)
        }}/>
        <button onClick={loggin}>Login</button>
        {loggedIn ? <h2>Hello</h2> : <h2>Nigga</h2>}
        
    </div>
    
  );
}
