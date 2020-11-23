export default function membersReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_MEMBERS':
      return action.members
    case 'ADD_MEMBER':
      return [...state, action.member]
    case 'REMOVE_MEMBER':
      return state.filter(member => member.id !== action.memberId)
    default:
      return state
  }
}

