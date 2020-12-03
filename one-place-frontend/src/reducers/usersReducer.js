export default function usersReducer(state = { loggedIn: false }, action) {
  switch (action.type) {
    case 'LOGIN':
      const { id, first_name } = action.response
      return { id, firstName: first_name, loggedIn: true }
    case 'ADD_USER':
      const {id, first_name } = action.response
      return {
        id,
        firstName: first_name,
        current: {},
        valid: true,
        authCompleted: false,
        errors: {},
        loggedIn: true
      }
    default:
      return state
  }
}