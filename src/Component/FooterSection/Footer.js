import React from 'react'
// import Products from '../ProductSection/Products'
import './Footer.css'

export default function Footer() {
  return (
    <>
    <div className="footer-part">
      <div className="f-part">
      
      <div className="product-list">
        <h2>Products</h2>
        <ul>
        <li><a href="#">Women cloths</a></li>
        <li><a href="#">Men's Cloths</a></li>
        <li><a href="#">electronic</a></li>
        <li><a href="#">Jewelery</a></li>
       </ul>
        </div>
        <div className="help-list">
          <h2>HELP</h2>
          <li><a href="#">Delivery</a></li>
        <li><a href="#">Returns</a></li>
        <li><a href="#">Secure payments</a></li>
        <li><a href="#">Contact Us</a></li>
        </div>

        <div className="about-list">
        <h2>ABOUT US</h2>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Terms & Conditions of Sales</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Responsibility</a></li>
        </div>

        <div className="feed-back">
          <h2>FEEDBACK</h2>
          <li><a href="#">Leave a feedback</a></li>
          
        </div>
        </div>
      
           
        <div className="following">
          <h1 className="follow">FOLLOW US</h1>
          
          <footer class="footer">
    {/* <p class="text">Created with <i class="fa fa-heart"></i> by Anjali </p> */}
    
        <a href="https://www.linkedin.com/in/anjali-raj-5796a71a7" target="_blank" class="link">
            <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
     
        </a>
        <a href="https://github.com/AnjaliRaj05" target="_blank" class="link">
            <i class="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
    
         </footer>
         </div>
       

{/* 
      <Products/> */}
    </div>
   
    </>
  )
}
