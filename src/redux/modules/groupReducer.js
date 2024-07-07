const SET_GROUP = 'SET_GROUP'
const CREATE_GROUP = 'CREATE_GROUP'

export const setGroup = group => ({
  type: SET_GROUP,
  payload: group
})

export const createGroup = title => ({
  type: CREATE_GROUP,
  payload: title
})

const initialState = {
  groups: {
    data: []
  }
}

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUP:
      return {
        ...state,
        groups: action.payload
      }
    case CREATE_GROUP:
      return {
        ...state,
        groups: {
          data: [...state.groups.data, action.payload]
        }
      }
    default:
      return state
  }
}

export default groupReducer
