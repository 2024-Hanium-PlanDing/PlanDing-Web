import StarOn from '../../../../assets/starOn.svg'
import StarOff from '../../../../assets/StarOff.svg'
import { useNavigate } from 'react-router-dom'

const MainTitle = ({ text, favoriteToggle, favoriteState }) => {
  const nav = useNavigate()
  const path = window.location.pathname
  return (
    <div className="w-full h-[80px] pr-6 rounded-t-md font-bold text-[32px] flex items-center justify-between pl-4 bg-primary-200 text-white">
      {path !== '/list' && (
        <button
          type="button"
          alt="뒤로가기"
          className="text-button"
          onClick={() => nav('/list')}>
          Home
        </button>
      )}

      {text ?? 'Planding'}
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
