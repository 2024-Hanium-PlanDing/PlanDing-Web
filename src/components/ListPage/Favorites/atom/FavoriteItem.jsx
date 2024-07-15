import { useNavigate } from 'react-router-dom'

const FavoriteItem = ({ data }) => {
  const nav = useNavigate()
  console.log(data)
  return (
    <div
      className="w-[40px] h-[40px] rounded-full border border-black"
      onClick={() => nav(`/group/${data.code}`)}>
      <img
        className="w-full h-full"
        src={data.thumbnailPath}
        alt="즐겨찾기"
      />
    </div>
  )
}

export default FavoriteItem
