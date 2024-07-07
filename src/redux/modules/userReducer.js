const USER_INFO = 'USER_INFO'
const SET_TOKEN = 'SET_TOKEN'

export const userInfo = userInfo => ({
  type: USER_INFO,
  payload: { userInfo }
})
export const setToken = token => ({
  type: SET_TOKEN,
  payload: token
})

const initialState = {
  user: null,
  token: null
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_INFO:
      return {
        ...state,
        user: action.payload
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}

export default userReducer
