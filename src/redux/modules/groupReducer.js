const SET_GROUP = 'SET_GROUP'
const CREATE_GROUP = 'CREATE_GROUP'
const GROUP_INFO = 'GROUP_INFO'
const ADD_GROUP_SCHEDULE = 'ADD_GROUP_SCHEDULE'
const REMOVE_GROUP_SCHEDULE = 'REMOVE_GROUP_SCHEDULE'
const SET_GROUP_SCHEDULE = 'SET_GROUP_SCHEDULE'
const ADD_GROUP_CAHT = 'ADD_GROUP_CAHT'

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
  type: SET_GROUP_SCHEDULE,
  payload: data
})

export const addGroupSchedule = data => ({
  type: ADD_GROUP_SCHEDULE,
  payload: data
})

export const removeGroupSchedule = id => ({
  type: REMOVE_GROUP_SCHEDULE,
  payload: id
})

export const addGroupChat = data => ({
  type: ADD_GROUP_CAHT,
  payload: data
})

const initialState = {
  groups: [],
  groupInfo: [],
  groupSchedule: [],
  groupChat: []
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
        groups: [...state.groups.data, action.payload]
      }
    case GROUP_INFO:
      return {
        ...state,
        groupInfo: action.payload
      }
    case SET_GROUP_SCHEDULE:
      return {
        ...state,
        groupSchedule: action.payload
      }
    case ADD_GROUP_SCHEDULE:
      return {
        ...state,
        groupSchedule: [...state.groupSchedule, action.payload]
      }
    case REMOVE_GROUP_SCHEDULE:
      return {
        ...state,
        groupSchedule: state.groupSchedule.filter(
          schedule => schedule.id !== action.payload
        )
      }
    case ADD_GROUP_CAHT:
      return {
        ...state,
        groupChat: [...state.groupChat, action.payload]
      }
    default:
      return state
  }
}

export default groupReducer
