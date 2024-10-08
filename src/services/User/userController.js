import basicApi from '../index'
import { setToken, userInfo } from '../../redux/modules/userReducer'

export const UserToken = token => async dispatch => {
  try {
    const response = await basicApi.post(`/api/v1/temporary-token`, {
      temporaryToken: token
    })
    const accessToken = response.headers['access-token']
    const refreshToken = response.headers['refresh-token']
    localStorage.setItem('access-token', accessToken)
    localStorage.setItem('refresh-token', refreshToken)
    dispatch(setToken(accessToken))
  } catch (error) {
    console.error('Error fetching user info:', error)
    throw error
  }
}

export const UserInfo = () => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/profile`)

    dispatch(userInfo(response.data.data))
  } catch (error) {
    console.error('Error fetching user info:', error)
    throw error
  }
}
