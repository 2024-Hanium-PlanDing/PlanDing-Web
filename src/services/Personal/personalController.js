import basicApi from '..'
import {
  createPersonalSchedule,
  removePersonalSchedule,
  setPersonalSchedule
} from '../../redux/modules/personalReducer'

export const postPersonalSchedule = scheduleData => async dispatch => {
  try {
    const response = await basicApi.post('/api/v1/schedule', scheduleData)
    dispatch(createPersonalSchedule(response.data.data))
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

export const getPersonalSchedule = (startDate, endDate) => async dispatch => {
  try {
    const response = await basicApi.get(
      `/api/v1/schedule/week/${startDate}/${endDate}`
    )
    dispatch(setPersonalSchedule(response.data.data))
  } catch (error) {
    console.error('Error fetching schedule:', error)
    throw error
  }
}

export const deletePersonalSchedule = id => async dispatch => {
  try {
    const response = await basicApi.delete(`/api/v1/schedule/${id}`)

    dispatch(removePersonalSchedule(id))
    return response
  } catch (error) {
    console.error('Error fetching schedule:', error)
    throw error
  }
}
