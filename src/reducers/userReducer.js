import loginService from '../services/login'
import userService from '../services/user'

export const login = (username, password) => async dispatch => {
  try {
    const loggedInUser = await loginService.login({ username, password })

    window.localStorage.setItem('loggedAppUser', JSON.stringify(loggedInUser))

    userService.setToken(loggedInUser.access)
    dispatch({
      type: 'LOGIN',
      data: loggedInUser,
    })
    console.info(`Welcome ${loggedInUser.name}`)
    // dispatch(notify(`Welcome ${loggedInUser.name}`))
  } catch (error) {
    if (JSON.stringify(error).includes('401')) {
      console.error('Wrong Credentials')
      // dispatch(notify('Wrong Credentials', 'error'))
    } else {
      console.error('Internet/Server Issue')
      // dispatch(notify('Internet/Server Issue', 'error'))
    }
  }
}

export const logout = () => async dispatch => {
  window.localStorage.removeItem('loggedAppUser')
  dispatch({ type: 'LOGOUT' })
}

export const check = () => async dispatch => {
  const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
  if (loggedUserJSON) {
    const loggedInUser = JSON.parse(loggedUserJSON)
    userService.setToken(loggedInUser.access)
    dispatch({
      type: 'CHECK',
      data: loggedInUser,
    })
    // dispatch(notify(`Welcome ${loggedInUser.name}`))
    console.info(`Welcome ${loggedInUser.name}`)
  }
}

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return null
    case 'CHECK':
      return action.data
    default:
      return state
  }
}

export default userReducer
