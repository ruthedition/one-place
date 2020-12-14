export default function membersReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_MEMBERS':
      return action.members.map(member => member.shoe_size ? member : { ...member, shoe_size: '' })
    case 'ADD_MEMBER':
      return [...state, action.member]
    case 'EDIT_MEMBER':
      return state.map(member => {
        if (member.id === action.member.id) {
          return action.member.shoe_size ? action.member : { ...action.member, shoe_size: '' }
        }
        else {
          return member
        }
      })
    case 'REMOVE_MEMBER':
      return state.filter(member => member.id !== action.memberId)
    default:
      return state
  }
}

