const SET_PERSONAL_SCHEDULE = 'SET_PERSONAL_SCHEDULE'
const CREATE_PERSONAL_SCHEDULE = 'CREATE_PERSONAL_SCHEDULE'

export const setPersonalSchedule = data => ({
  type: SET_PERSONAL_SCHEDULE,
  payload: data
})

export const createPersonalSchedule = data => ({
  type: CREATE_PERSONAL_SCHEDULE,
  payload: data
})

const initialState = {
  persnoalSchedule: []
}

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONAL_SCHEDULE:
      return {
        ...state,
        persnoalSchedule: action.payload
      }
    case CREATE_PERSONAL_SCHEDULE:
      return {
        ...state,
        persnoalSchedule: [...state.groups.data, action.payload]
      }
    default:
      return state
  }
}

export default personalReducer
