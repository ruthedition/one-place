import usersReducer from './usersReducer'
import membersReducer from './membersReducer'
import { combineReducers } from 'redux'

const appReducer = combineReducers({
  users: usersReducer,
  members: membersReducer,
})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }
  return appReducer(state, action)
}


export default rootReducer
