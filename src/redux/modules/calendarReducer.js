const SET_DATE = 'SET_DATE'

export const setDate = (startDate, endDate, week) => ({
  type: SET_DATE,
  payload: { startDate, endDate, week }
})

const initialState = {
  startDate: null,
  endDate: null,
  week: null
}

const calendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        week: action.payload.week
      }
    default:
      return state
  }
}

export default calendarReducer
