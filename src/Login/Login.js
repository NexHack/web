import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

import  './style.css'
function Login() {
  const padding = {
    paddingRight: 5,
  }
    return (
        <div>
        
      <div className="base-container" >
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            {/* <img src={loginImg} /> */}
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" required="required"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" required="required"/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Login
          </button>
          <div>
            New User ?
            <Link style={padding} to='/register'>
              <button type="button" className="btn">
                Register
              </button>
            </Link>
            </div>

        </div>
      </div>
  
        </div>
    )
}

export default Login
