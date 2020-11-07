import { Link, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

import './App.css'
const Menu = () => {
  const padding = {
    paddingRight: 1,
     
  }
  
  return (
    <div classname="home" >
    
      <Link style={padding} to='/'>
       <h4>Home</h4> 
      </Link>
      
      <Link style={padding} to='/login'>
        <h4>Login</h4>
      </Link>

      <Link style={padding} to='/team'>
        <h4>Team</h4>
      </Link>

      <Link style={padding} to='/mentor'>
       <h4>Mentorship</h4>
      </Link>
      <Link style={padding} to='/about'>
       <h4>About</h4> 
      </Link>
    </div>
  )
}

const About = () => (
  <div>
    <h1> About Us</h1>
  </div>
)
const Team = () => (
  <div>
    <h1> Team Formation</h1>
  </div>
)
const Mentor = () => (
  <div>
    <h1> Find Mentor </h1>
  </div>
)

const Home = () => {
  const padding = {
    paddingRight: 5,
  }
  return (
  <div >
    <h1>CollabLABS 1.0</h1>

    <div classname="cointainer">
         <div  >
         <h2>Why you need a team?</h2>
         <p>Find friends who want to grow in career as you want to
         hkfhhfdshfhshfdkhk
         dskhskh
          </p>
             <button class="button">Find TEAM
                <Link style={padding} to='/team'>
             </Link>
             </button>
             
         </div>
         <div>
<h2 >Why you need a mentor?</h2>
         <p>Now get mentorship by professionals 
         djffljsldfjshfdshdfks
         sfkdshfkshfkdhskdlffkshfksdkhskvhdkvkdhkhkhgk
         b</p>
             <button class="button"> Find MENTOR
           <Link style={padding} to='/mentor'>
             
            </Link>
             </button>
             
          </div>
     
     </div> 
   </div>
  )
}

const Footer = () => <div>Footer here.</div> //Fix my styling
//Please separate above this comment into their own files.
const App = () => {
  return (
    <div classname="home">
      <Menu />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/team'>
          <Team />
        </Route>
        <Route path='/mentor'>
          <Mentor />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
