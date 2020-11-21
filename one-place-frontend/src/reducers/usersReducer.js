export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      const {id, first_name} = action.response
      return {id, firstName: first_name, loggedIn: true}
    default:
      return state
  }
}