import { Link, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

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
