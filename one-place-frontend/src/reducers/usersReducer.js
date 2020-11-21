export default function usersReducer(state = { loggedIn: false }, action) {
  switch (action.type) {
    case 'LOGIN':
      const { id, first_name } = action.response
      return { id, firstName: first_name, loggedIn: true }
    case 'LOGOUT':
      return {loggedIn: false }
    default:
      return state
  }
}