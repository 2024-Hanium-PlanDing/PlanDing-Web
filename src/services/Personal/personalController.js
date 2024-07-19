import basicApi from '..'
import {
  createPersonalSchedule,
  removePersonalSchedule,
  setPersonalSchedule
} from '../../redux/modules/personalReducer'

export const postPersonalSchedule = (token, scheduleData) => async dispatch => {
  try {
    const response = await basicApi.post('/api/v1/schedule', scheduleData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    dispatch(createPersonalSchedule(response.data.data))
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

export const getPersonalSchedule =
  (token, startDate, endDate) => async dispatch => {
    try {
      const response = await basicApi.get(
        `/api/v1/schedule/week/${startDate}/${endDate}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      dispatch(setPersonalSchedule(response.data.data))
    } catch (error) {
      console.error('Error fetching schedule:', error)
      throw error
    }
  }

export const deletePersonalSchedule = (token, id) => async dispatch => {
  try {
    const response = await basicApi.delete(`/api/v1/schedule/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    dispatch(removePersonalSchedule(id))
    return response
  } catch (error) {
    console.error('Error fetching schedule:', error)
    throw error
  }
}
