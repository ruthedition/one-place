export default function usersReducer(state = { valid: false, current: {}, authComplete: false }, action) {
  switch (action.type) {
    case 'LOGIN':
      const { user, valid } = action.response
      const { id, first_name } = user
      return {
        ...state,
        current: {
          id,
          firstName: first_name
        },
        valid
      }
    case 'INVALID_USER':
      return {
        ...state,
        valid: false,
        errors: action.errors
      }
    case 'BEGIN_AUTH':
      return { ...state, authComplete: false }
    case 'COMPLETE_AUTH':
      return { ...state, authComplete: true }
    default:
      return state
  }
}