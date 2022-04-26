import { login, logged } from '../services/users';

export const userReducer = (state = [], action) => {
  if (action.type === '@users/login') {
    return { ...state, logged: action.payload }
  }

  if (action.type === '@users/logged') {
    return { ...state, logged: action.payload }
  }
  return state
}


// ACTIONS ==> send info for update redux store
// We do async functions as a return because we want to make wait the other part of
// code until we do something async. And because we want to communicate with a backend,
// passing through a middleware.

const authUser = info => {
  return async (dispatch) => {
    const user = await login(info)

    dispatch({
      type: '@users/login',
      payload: user
    })
  }
}

/**
 * Get and dispatch the logged user information to the store
 * whenever we refresh the page
 */
const loggedUser = () => {
  return async (dispatch) => {
    const user = await logged()

    dispatch({
      type: '@users/logged',
      payload: user
    })
  }
}

export { authUser, loggedUser }