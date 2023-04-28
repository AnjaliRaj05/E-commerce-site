// import React from 'react'
// import "./Login.css"

// export default function Login() {
//   return (


//     <div className="cover">
//       <h1 className="f-l">Login Page</h1>
//       <div className="form">
//       <h2 className="s-n"> <i class="fa fa-sign-in" aria-hidden="true"></i>sign in</h2>
//       <input type="text" placeholder="username" name="name" />
      
//       <input type="password" placeholder="password" name="password"/>
//       <p className="p-l">or login with </p>
//       <div className="i-l">
//       <i class="fa fa-google-plus-official me-1" aria-hidden="true"></i>
//       <i class="fa fa-facebook-official me-1" aria-hidden="true"></i>
//       </div>
//        <center><button className="btn btn-primary">Login</button></center> 

  
//     </div>
//     </div>
//   )
// }

import React from 'react'
import "./Login.css"
import { NavLink } from 'react-router-dom';


export default function Login() {
  return (
    <>


    <div className="cover">
      <h1 className="f-l">Login Page</h1>
      <div className="form">
      <h2 className="s-n"> <i class="fa fa-sign-in" aria-hidden="true"></i>sign in</h2>
      <input type="text" placeholder="username" name="name" />
      
      <input type="password" placeholder="password" name="password"/>
      <p className="p-l">or login with </p>
      <div className="i-l">
      <i class="fa fa-google-plus-official me-1" aria-hidden="true"></i>
      <i class="fa fa-facebook-official me-1" aria-hidden="true"></i>
      </div>
       <center><button className="btn btn-primary">Login</button></center> 
       
       <NavLink to="/rejistration" className="btn btn-outline-primary px-3">Sign Up</NavLink>
    

  
    </div>
    </div>
    </>
  )
}