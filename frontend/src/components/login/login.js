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
    }
  }

  const popUp=()=>{
    alert('logged in');
  }
  return (
    
    <div className='LoginForm'>
        <label>username: </label>
        <input type='text' onChange={(event)=>{setUsernameState(event.target.value)}}/>
        <label>password: </label>
        <input type='password' onChange={(event)=>{setPasswordState(event.target.value)}}/>
        <button onClick={loggin}>Login</button>
        {loggedIn && popUp()}
    </div>
    
  );
}
