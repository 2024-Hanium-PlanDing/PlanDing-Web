import basicApi from '..'
import {
  createPersonalSchedule,
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
    dispatch(createPersonalSchedule(response))
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

export const getPersonalSchedule =
  (token, weekOffset = 2) =>
  async dispatch => {
    try {
      const response = await basicApi.get('/api/v1/schedule', {
        params: { weekOffset },
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      dispatch(setPersonalSchedule(response.data))
    } catch (error) {
      console.error('Error fetching schedule:', error)
      throw error
    }
  }
