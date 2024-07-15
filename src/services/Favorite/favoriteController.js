import basicApi from '..'
import { setFavorite } from '../../redux/modules/favoriteReducer'

export const getFavoriteList = token => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/favorite`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

    dispatch(setFavorite(response.data))
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
export const postFavorite = (token, groupCode) => async dispatch => {
  try {
    const response = await basicApi.post(
      `/api/v1/favorite/${groupCode}`,
      null, // 바디가 없는 경우 null로 전달
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    dispatch(getFavoriteList(token))
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
