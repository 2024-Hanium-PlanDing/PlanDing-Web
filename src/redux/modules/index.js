import { combineReducers } from 'redux'
import user from './userReducer'
import modal from './modalReducer'
import group from './groupReducer'
import personal from './personalReducer'
import date from './calendarReducer'
import favorite from './favoriteReducer'
import groupTodo from './groupTodoReducer'

const rootReducer = combineReducers({
  user,
  modal,
  group,
  personal,
  date,
  favorite,
  groupTodo
})

export default rootReducer
