import basicApi from '..'
import { setFavorite } from '../../redux/modules/favoriteReducer'

export const getFavoriteList = () => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/favorite`)

    dispatch(setFavorite(response.data))
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
export const postFavorite = groupCode => async dispatch => {
  try {
    const response = await basicApi.post(
      `/api/v1/favorite/${groupCode}`,
      null // 바디가 없는 경우 null로 전달
    )
    dispatch(getFavoriteList())
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const deleteFavorite = groupCode => async dispatch => {
  try {
    const response = await basicApi.delete(`/api/v1/favorite/${groupCode}`)
    dispatch(getFavoriteList())
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
