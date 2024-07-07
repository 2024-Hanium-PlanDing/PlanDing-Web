import { combineReducers } from 'redux'
import user from './userReducer'
import modal from './modalReducer'
import group from './groupReducer'

const rootReducer = combineReducers({
  user,
  modal,
  group
})

export default rootReducer
