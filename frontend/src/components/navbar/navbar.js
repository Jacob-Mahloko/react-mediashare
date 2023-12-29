import React from 'react'
import './navbar.css'
import login from '../login/login';
export default function NavBar() {
  return (
    <div className='navbar'>
        <ul>
            <li>
                <a href=''>Home</a>
            </li>
            <li>
                <a href=''>Login</a>
            </li>
            <li>
                <a href=''>About</a>
            </li>
            <li>
                <a href=''>Contact</a>
            </li>
        </ul>
    </div>
  );
}
