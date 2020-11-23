export default function membersReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_MEMBERS':
      return action.members
    case 'ADD_MEMBER':
      return [...state, action.member]
    case 'EDIT_MEMBER':
     return state.map(member => member.id === action.member.id ? action.member : member)
    case 'REMOVE_MEMBER':
      return state.filter(member => member.id !== action.memberId)
    default:
      return state
  }
}

