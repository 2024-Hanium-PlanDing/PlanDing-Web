const SET_PERSONAL_SCHEDULE = 'SET_PERSONAL_SCHEDULE'
const CREATE_PERSONAL_SCHEDULE = 'CREATE_PERSONAL_SCHEDULE'

export const setPersonalSchedule = group => ({
  type: SET_PERSONAL_SCHEDULE,
  payload: group
})

export const createPersonalSchedule = data => ({
  type: CREATE_PERSONAL_SCHEDULE,
  payload: data
})

const initialState = {
  persnoalSchedule: {
    data: []
  }
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
        persnoalSchedule: {
          data: [...state.groups.data, action.payload]
        }
      }
    default:
      return state
  }
}

export default personalReducer
