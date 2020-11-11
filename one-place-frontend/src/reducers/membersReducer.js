export default function membersReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_MEMBER':
      console.log(action)
      return [...state, action.member]

    default:
      return state
  }
}

