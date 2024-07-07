import basicApi from '../index'
import { setToken, userInfo } from '../../redux/modules/userReducer'

export const UserInfo = token => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    dispatch(userInfo(response.data.data))
    dispatch(setToken(token))
  } catch (error) {
    console.error('Error fetching user info:', error)
    throw error
  }
}
