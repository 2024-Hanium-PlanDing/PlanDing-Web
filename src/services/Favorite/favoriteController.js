import basicApi from '..'
import { addFavorite, setFavorite } from '../../redux/modules/favoriteReducer'

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

export const postFavorite = (token, groupCode) => async dispatch => {
  try {
    const response = await basicApi.post(`/api/v1/favorite/${groupCode}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    dispatch(addFavorite(response.data))
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
