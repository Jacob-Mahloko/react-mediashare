import React from 'react'
import './login.css'

export default function Login() {
  return (
    
    <div className='LoginForm'>
        <label>username: </label>
        <input type='text' />
        <label>password: </label>
        <input type='password' />
        <button>Login</button>
    </div>
  )
}
