import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className="footer">
        <ul>
            <li>Copyright reserved</li>
            <li>
                <a href="#abt">About Us</a>
            </li>
            <li id="cnt">
                Contact Us :<br/>
                Phone : 000 000 0000 <br/>
                Email: placeholder@gmail.com <br/>
            </li>
            <li>
                <a href="login.html">Login</a>
            </li>
        </ul>
    </div>
  )
}
