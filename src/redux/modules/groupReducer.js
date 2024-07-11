const SET_GROUP = 'SET_GROUP'
const CREATE_GROUP = 'CREATE_GROUP'
const GROUP_INFO = 'GROUP_INFO'
const SET_PERSONAL_GROUP = 'SET_PERSONAL_GROUP'

export const setGroup = group => ({
  type: SET_GROUP,
  payload: group
})

export const createGroup = title => ({
  type: CREATE_GROUP,
  payload: title
})

export const groupInfo = groupId => ({
  type: GROUP_INFO,
  payload: groupId
})

export const setGroupSchedule = data => ({
  type: SET_PERSONAL_GROUP,
  payload: data
})

const initialState = {
  groups: {
    data: []
  },
  groupInfo: {
    data: []
  },
  groupSchedule: {
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
    case GROUP_INFO:
      return {
        ...state,
        groupInfo: action.payload
      }
    case SET_PERSONAL_GROUP:
      return {
        ...state,
        groupSchedule: action.payload
      }
    default:
      return state
  }
}

export default groupReducer
