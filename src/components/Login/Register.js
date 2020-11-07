import { useState } from 'react'
import registerService from '../../services/register'

/*
 *username*
 *password*
 *email*
 *college_name
 *mobile_num*
 */
const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [collegeName, setCollegeName] = useState('')
  const [mobile, setMobile] = useState('')

  const handleRegister = async event => {
    event.preventDefault()
    const newUser = {
      username,
      password,
      email,
      user_detail: {
        college_name: collegeName,
        mobile_num: mobile,
      },
    }
    await registerService.create(newUser)

    setUsername('')
    setPassword('')
    setEmail('')
    setCollegeName('')
    setMobile('')
  }

  return (
    <div>
      <h1>Register here.</h1>
      <form onSubmit={handleRegister}>
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
        <div>
          email:{' '}
          <input
            type='email'
            value={email}
            name='email'
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div>
          phone:{' '}
          <input
            type='text'
            value={mobile}
            name='mobile'
            onChange={({ target }) => setMobile(target.value)}
          />
        </div>
        <div>
          college name:{' '}
          <input
            type='text'
            value={collegeName}
            name='collegeName'
            onChange={({ target }) => setCollegeName(target.value)}
          />
        </div>
        <button id='registerBtn' type='submit'>
          register
        </button>
      </form>
    </div>
  )
}
export default Register
