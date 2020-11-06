import React from 'react'
const Register=()=> {
    return (
        
      <div className="base-container" >
        <div className="header">Register</div>
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
          <button type="button" className="btn">
          Register
          </button>
        
      </div>
  
     
    )
}

export default Register
