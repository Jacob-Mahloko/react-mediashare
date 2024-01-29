import React , { useState }from 'react'
import './navbar.css'
import login from '../login/login';
export default function NavBar({ setPage }) {
  return (
    <div className='navbar'>
        <ul>
        <li>
          <a href='#' onClick={() => setPage('home')}>Home</a>
        </li>
        <li>
          <a href='#' onClick={() => setPage('login')}>Login</a>
        </li>
        <li>
          <a href='#' onClick={() => setPage('about')}>About</a>
        </li>
        <li>
          <a href='#' onClick={() => setPage('contact')}>Contact</a>
        </li>
      </ul>
    </div>
  );
}
