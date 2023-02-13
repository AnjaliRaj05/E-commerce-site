import React from 'react'
import './Rejistration.css'
export default function Rejistration() {
  return (
    <div className="R-cover">
       <h1 className="R-h" >Rejistration form</h1>
    <div className="R-form">
     <h2 className="s-h"> <i class="fa fa-user-plus" aria-hidden="true"></i>sign up</h2>
      <input type="text" placeholder="User name" />
      <input type="text" placeholder="  Email"/>
      <input type="password" placeholder=" Password"/>
      <center><button className="btn btn-primary">Submit</button></center> 
      </div>
    </div>
  )
}
