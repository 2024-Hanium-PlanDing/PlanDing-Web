import { useNavigate } from 'react-router-dom'

const FavoriteItem = ({ data, isSelected, onSelectItem }) => {
  const nav = useNavigate()
  const handleClick = () => {
    onSelectItem(data.code)
    nav(`/group/${data.code}`)
  }
  return (
    <div
      className={`w-[40px] h-[40px] rounded-full border  
      ${isSelected ? 'border-blue-500 border-2' : 'border-gray-300'} 
      ${isSelected ? 'opacity-100' : 'opacity-50'}`}
      onClick={handleClick}>
      <img
        className="w-full h-full"
        src={data.thumbnailPath}
        alt="즐겨찾기"
      />
    </div>
  )
}

export default FavoriteItem
