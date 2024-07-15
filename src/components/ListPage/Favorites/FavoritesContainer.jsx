import { useSelector } from 'react-redux'
import FavoriteItem from './atom/FavoriteItem'

const FavoritesContainer = () => {
  const favoritesList = useSelector(state => state.favorite.favorite)
  console.log(favoritesList)
  return (
    <div className="w-[88px] h-[781px] py-10 px-6 gap-10 shadow-md rounded-lg bg-[#FBFBFB] border border-black flex items-center flex-col">
      <FavoriteItem />
      <FavoriteItem />
      <FavoriteItem />
      <FavoriteItem />
    </div>
  )
}
export default FavoritesContainer
