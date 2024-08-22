import { useSelector } from 'react-redux'
import FavoriteItem from './atom/FavoriteItem'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FavoritesContainer = () => {
  const favoritesList = useSelector(state => state.favorite.favorites)
  const [selectedItem, setSelectedItem] = useState(null)
  const { code } = useParams() // URL에서 'code' 파라미터 추출

  useEffect(() => {
    if (code) {
      setSelectedItem(code)
    }
  }, [code])
  const handleSelectItem = code => {
    setSelectedItem(code)
  }
  return (
    <div className="w-[88px] h-[781px] py-10 px-6 mt-10 gap-10 shadow-md rounded-lg bg-white flex items-center flex-col">
      {favoritesList?.data?.map((data, index) => (
        <FavoriteItem
          data={data}
          key={index}
          isSelected={data.code === selectedItem}
          onSelectItem={handleSelectItem}
        />
      ))}
    </div>
  )
}
export default FavoritesContainer
