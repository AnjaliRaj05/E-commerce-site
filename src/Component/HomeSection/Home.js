import React from 'react'
// import Products from '../ProductSection/Products'
import  img from '../../images/bgg.jpg';
import 'react-slideshow-image/dist/styles.css';
import {Fade,Zoom,Slide}  from 'react-slideshow-image';

import './Home.css'

export default function Home() {
  return (
    <>
    <div className="home-container">
      <div>
  <img src={img} className="bg-part"></img>
  </div>
  <div>
      <p>New Season Arrival</p>
      <p>Check in or check out?</p>
      {/* <h2 >SALE ...</h2> */}
      
    </div>
    {/* <Products/> */}
    </div>
    </>
  )
}
