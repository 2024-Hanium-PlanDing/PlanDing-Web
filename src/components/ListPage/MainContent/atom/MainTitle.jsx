import StarOn from '../../../../assets/starOn.svg'
import StarOff from '../../../../assets/StarOff.svg'
import { useNavigate } from 'react-router-dom'

const MainTitle = ({ favoriteToggle, favoriteState }) => {
  const nav = useNavigate()
  const path = window.location.pathname
  const endPath = path.split('/').pop()

  return (
    <div className="w-full h-[80px] pr-6 rounded-t-md font-bold text-[32px] flex items-center justify-between pl-4 text-black">
      {path !== '/list' && (
        <div className="flex gap-8">
          <button
            type="button"
            alt="뒤로가기"
            className="text-button"
            onClick={() => nav('/list')}>
            Home
          </button>
          <button
            className="text-button"
            onClick={endPath !== 'todo' ? () => nav('todo') : () => nav(-1)}>
            {endPath !== 'todo' ? 'Todo' : 'back'}
          </button>
        </div>
      )}
      {favoriteToggle && (
        <button
          onClick={favoriteToggle}
          className="w-[113px] h-[40px] py-2 px-4 rounded-lg text-white text-button flex items-center gap-2 bg-primary-400 ">
          <img
            src={favoriteState ? StarOn : StarOff}
            alt="즐겨찾기"
          />
          Favorite
        </button>
      )}
    </div>
  )
}
export default MainTitle
