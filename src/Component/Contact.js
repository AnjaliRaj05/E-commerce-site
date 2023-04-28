// import React from 'react'
// import Login from './LoginPage/Login'

// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <Login/>
    
//     </div>
//   )
// }
import React from 'react'
// import Login from './LoginPage/Login'
import img2 from '../../src/images/contactpic.jpg'
import { NavLink } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      {/* <h1>Contact Page</h1> */}
      
      <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        {/* <img src="/images/contactpic.jpg" alt="Contact Us" height="300px" width="300px" /> */}
                        <img src={img2} className="" height="350px" width="500px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleForm" placeholder="John Doe"/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-outline-primary">Send Message</button>
                        </form>
                    </div>
                    </div>
                </div>
      {/* <Login/> */}
    
    </div>
  )
}
