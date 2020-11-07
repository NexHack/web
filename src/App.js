import { Link, Route, Switch } from 'react-router-dom'
import Login from './Login/Login'
import Register from './Login/Register'
import InputSkills from './Team/InputSkills'
import TeamList from './Team/TeamList'
import NewTeam from './Team/NewTeam'
const Menu = () => {
  const padding = {
    paddingRight: 5,
  }
  return (
    <div>
      <Link style={padding} to='/'>
        Home
      </Link>
      <Link style={padding} to='/login'>
        Login
      </Link>

      <Link style={padding} to='/team'>
        Team
      </Link>

      <Link style={padding} to='/mentor'>
        Mentorship
      </Link>
      <Link style={padding} to='/about'>
        About
      </Link>
    </div>
  )
}

const About = () => (
  <div>
    <h1>This is About Page.</h1>
  </div>
)
const Team = () => (
  <div>
    <h1>This is Team Page.</h1>
  </div>
)
const Mentor = () => (
  <div>
    <h1>This is Mentor Page.</h1>
  </div>
)
// const Login = () => (
//   <div>
//     <h1>This is Login Page.</h1>
//     <Link to='/register'>New User?</Link>
//   </div>
// )
// const Register = () => (
//   <div>
//     <h1>Register here.</h1>
//   </div>
// )
const Home = () => {
  const padding = {
    paddingRight: 5,
  }
  return (
    <div>
      <h1>This is Homepage.</h1>
      <Link style={padding} to='/team'>
        Find a Team
      </Link>

      <Link style={padding} to='/mentor'>
        Find a Mentor
      </Link>
    </div>
  )
}

const Footer = () => <div>Footer here.</div> //Fix my styling
//Please separate above this comment into their own files.
const App = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/team'>
          <InputSkills/>
        </Route>
        <Route path='/teamList'>
          <TeamList/>
        </Route>
        <Route path='/newTeam'>
          <NewTeam/>
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
