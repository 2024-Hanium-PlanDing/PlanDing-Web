import basicApi from '..'
import { setFavorite } from '../../redux/modules/favoriteReducer'

export const getFavoriteList = token => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    dispatch(setFavorite(response.data))
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
