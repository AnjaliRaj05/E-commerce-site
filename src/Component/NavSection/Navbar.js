import React from 'react';
import './Navbar.css'
import  image from '../../images/logo.jpg';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
 
  <>

<div className="nav-box">
        <nav>
           <img src={image} className="nav-img"></img>
            <ul>
                <li><NavLink to="/">Home</NavLink> </li>
                <li><NavLink to="/Products">Products</NavLink></li>
               
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>

            </ul>
            <div class="right-nav">
                <NavLink to="/login"><i className="fa fa-sign-in me-1"></i>Login</NavLink>
                <NavLink to="/rejistration"><i className="fa fa-user-plus me-1"></i>Rejistration</NavLink>
                <NavLink to="/cart"><i className="fa fa-shopping-cart me-1"></i>My Cart(0)</NavLink>
            </div>
        </nav>
        
    </div>
</>
  )
}
