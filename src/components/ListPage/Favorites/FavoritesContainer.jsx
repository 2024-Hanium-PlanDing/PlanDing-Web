import { useSelector } from 'react-redux'
import FavoriteItem from './atom/FavoriteItem'

const FavoritesContainer = () => {
  const favoritesList = useSelector(state => state.favorite.favorites)

  return (
    <div className="w-[88px] h-[781px] py-10 px-6 mt-10 gap-10 shadow-md rounded-lg bg-white flex items-center flex-col">
      {favoritesList?.data?.map((data, index) => (
        <FavoriteItem
          data={data}
          key={index}
        />
      ))}
    </div>
  )
}
export default FavoritesContainer
