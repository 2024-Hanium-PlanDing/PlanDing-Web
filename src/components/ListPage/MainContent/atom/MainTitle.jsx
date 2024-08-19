import StarOn from '../../../../assets/starOn.svg'
import StarOff from '../../../../assets/StarOff.svg'

const MainTitle = ({ text, favoriteToggle, favoriteState }) => {
  console.log(favoriteState)
  return (
    <div className="w-full h-[80px] pr-6 rounded-t-md font-bold text-[32px] flex items-center justify-between pl-4 bg-primary-200 text-white">
      {text ?? 'Planding'}
      <button
        onClick={favoriteToggle}
        className="w-[113px] h-[40px] py-2 px-4 rounded-lg text-white text-button flex items-center gap-2 bg-primary-400 ">
        <img
          src={favoriteState ? StarOn : StarOff}
          alt="즐겨찾기"
        />
        Favorite
      </button>
    </div>
  )
}
export default MainTitle
