import React from 'react'
// import Products from '../ProductSection/Products'
// import Navbar from '../NavSection/Navbar';
import  img from '../../images/bgg.jpg';
import 'react-slideshow-image/dist/styles.css';
import {Fade,Zoom,Slide}  from 'react-slideshow-image';
import './Home.css'
import Navbar from '../NavSection/Navbar';
import Products from '../ProductSection/Products';
import Footer from '../FooterSection/Footer';

export default function Home() {
  return (
    <>
    <Navbar/>
    <div className="home-container">
      <div>
  <img src={img} className="bg-part"></img>
  </div>
  <div>
    
      <p>New Season Arrival</p>
      <marquee >
      <p>Check in or check out?</p>
      </marquee>
      {/* <h2 >SALE ...</h2> */}
      
    </div>
    <Products/>
    <Footer/>
    </div>
    </>
  )
}
