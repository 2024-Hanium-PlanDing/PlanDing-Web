import { createStore, combineReducers, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import userReducer from '../modules/userReducer'
import modalReducer from '../modules/modalReducer'
import groupReducer from '../modules/groupReducer'
import personalReducer from '../modules/personalReducer'
import calendarReducer from '../modules/calendarReducer'

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  group: groupReducer,
  personal: personalReducer,
  date: calendarReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // redux-thunk 미들웨어를 적용
)
export default store
