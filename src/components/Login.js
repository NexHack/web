import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/userReducer'
import { Link } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async event => {
    event.preventDefault()
    dispatch(login(username, password))
    setUsername('')
    setPassword('')
  }
  return (
    <div>
      <h1>Login here.</h1>
      <form onSubmit={handleLogin}>
        <div>
          username:{' '}
          <input
            type='text'
            value={username}
            name='Username'
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password:{' '}
          <input
            type='text'
            value={password}
            name='Password'
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button id='loginBtn' type='submit'>
          login
        </button>
      </form>
      <Link to='/register'>New User?</Link>
    </div>
  )
}

export default Login
