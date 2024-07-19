const SET_PERSONAL_SCHEDULE = 'SET_PERSONAL_SCHEDULE'
const CREATE_PERSONAL_SCHEDULE = 'CREATE_PERSONAL_SCHEDULE'
const DELETE_PERSONAL_SCHEDULE = 'DELETE_PERSONAL_SCHEDULE'

export const setPersonalSchedule = data => ({
  type: SET_PERSONAL_SCHEDULE,
  payload: data
})

export const createPersonalSchedule = data => ({
  type: CREATE_PERSONAL_SCHEDULE,
  payload: data
})

export const deleteSchedule = id => ({
  type: DELETE_PERSONAL_SCHEDULE,
  payload: id
})

const initialState = {
  personalSchedule: []
}

const personalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERSONAL_SCHEDULE:
      return {
        ...state,
        personalSchedule: action.payload
      }
    case CREATE_PERSONAL_SCHEDULE:
      return {
        ...state,
        personalSchedule: [...state.personalSchedule, action.payload]
      }
    case DELETE_PERSONAL_SCHEDULE:
      return {
        ...state,
        personalSchedule: state.personalSchedule.filter(
          schedule => schedule.id !== action.payload
        )
      }
    default:
      return state
  }
}

export default personalReducer
