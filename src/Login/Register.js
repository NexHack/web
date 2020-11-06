import React from 'react'
import  './style.css'
function Register() {
    return (
        <div>
        
      <div className="base-container" >
        <div className="header">Register</div>
        <div className="content">
          
          <div className="form">
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="name" required="required" />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email" required="required"/>
                </div>
            
                <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" required="required"/>
                </div>
                <div className="form-group">
                <label htmlFor="Phone">Phone No.</label>
                <input type="tel" name="Phone" placeholder="Phone no" required="required"/>
                </div>
                <div className="form-group">
                <label htmlFor="Phone">Nationality</label>
                <input type="text" name="nationality" placeholder="nationality" required="required"/>
                </div>
                <div className="form-group">
                <label htmlFor="college">College Name</label>
                <input type="text" name="Phone" placeholder="College Name" />
                </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
          Register
          </button>
        </div>
      </div>
  
        </div>
    )
}

export default Register
