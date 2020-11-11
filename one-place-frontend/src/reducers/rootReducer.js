import membersReducer from './membersReducer'
import usersReducer from './usersReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  users: usersReducer,
  members: membersReducer,
})

export default rootReducer