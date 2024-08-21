import { toggleFavorite } from '../redux/modules/groupReducer'
import {
  deleteFavorite,
  postFavorite
} from '../services/Favorite/favoriteController'

const useFavorite = (groupInfo, dispatch, userInfo) => {
  const favoriteToggle = async () => {
    try {
      if (groupInfo.data.isFavorite) {
        deleteFavoriteEvent()
      } else {
        addFavoriteEvent()
      }
      dispatch(toggleFavorite()) // 상태 업데이트를 위한 액션 디스패치
    } catch (error) {
      console.error(error)
    }
  }
  const addFavoriteEvent = async () => {
    try {
      await dispatch(postFavorite(userInfo.token, groupInfo.data.groupCode))
      alert('즐겨찾기 추가')
    } catch (error) {
      console.error('즐겨찾기 추가 중 오류 발생:', error)
    }
  }
  const deleteFavoriteEvent = async () => {
    try {
      await dispatch(deleteFavorite(userInfo.token, groupInfo.data.groupCode))
      alert('즐겨찾기 삭제')
    } catch (error) {
      console.error('즐겨찾기 추가 중 오류 발생:', error)
    }
  }
  return { favoriteToggle }
}

export default useFavorite
