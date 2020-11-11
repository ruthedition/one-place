export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case 'LOGIN':
      return action.user
    default:
      return state
  }
}