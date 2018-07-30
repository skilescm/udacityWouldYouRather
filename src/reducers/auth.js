import {
  USER_LOGIN,
  USER_LOGOUT
} from '../actions/auth'

export function auth (state = null, action) {
  switch (action.type) {
    case USER_LOGIN:
      return action.id
    case USER_LOGOUT:
      return null
    default:
      return state
  }
}
