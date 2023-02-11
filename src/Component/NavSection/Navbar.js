import React from 'react';
import './Navbar.css'
import  image from '../../images/logo.jpg';
// import { NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
 
  <>

<div className="nav-box">
        <nav>
           <img src={image} className="nav-img"></img>
            <ul>
                <li><a href="#">Home</a> </li>
                <li><a href="#">Products</a></li>
               
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>

            </ul>
            <div class="right-nav">
                <a href="#"><i className="fa fa-sign-in me-1"></i>Login</a>
                <a href="#"><i className="fa fa-user-plus me-1"></i>Rejistration</a>
                <a href="#"><i className="fa fa-shopping-cart me-1"></i>My Cart</a>
            </div>
        </nav>
        
    </div>
</>
  )
}
