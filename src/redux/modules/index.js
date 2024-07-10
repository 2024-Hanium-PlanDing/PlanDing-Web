import { combineReducers } from 'redux'
import user from './userReducer'
import modal from './modalReducer'
import group from './groupReducer'
import personal from './\bpersonalReducer'

const rootReducer = combineReducers({
  user,
  modal,
  group,
  personal
})

export default rootReducer
