import StarOn from '../../../../assets/starOn.svg'
import StarOff from '../../../../assets/StarOff.svg'
import { useNavigate } from 'react-router-dom'
import LogoImg from '../../../../assets/logoImg.svg'
import SwitchBtn from './SwitchBtn'

const MainTitle = ({ favoriteToggle, favoriteState }) => {
  const nav = useNavigate()
  const path = window.location.pathname
  const endPath = path.includes('todo') ? 'todo' : ''
  const basePath = path.split('/').slice(0, 3).join('/') // 그룹 코드가 포함된 기본 경로

  return (
    <div className="w-full h-[80px] pr-6 rounded-t-md font-bold text-[32px] flex items-center justify-between pl-4 text-black border-b border-b-neutrals-80 relative">
      {path !== '/list' && (
        <div className="flex gap-8">
          <button
            type="button"
            alt="홈"
            className="text-button"
            onClick={() => nav('/list')}>
            <img
              src={LogoImg}
              alt="홈"
            />
          </button>
          <div className="flex absolute bottom-0 left-[8%]">
            <SwitchBtn
              type="스케줄"
              endPath={endPath}
              onClick={() =>
                nav(`${basePath}${path.includes('todo') ? '' : '/todo'}`)
              }
            />
            <SwitchBtn
              type="플래너"
              endPath={endPath}
              onClick={() =>
                nav(`${basePath}${path.includes('todo') ? '' : '/todo'}`)
              }
            />
          </div>
          {/* <button
            className="text-button"
            onClick={endPath !== 'todo' ? () => nav('todo') : () => nav(-1)}>
            {endPath !== 'todo' ? 'Todo' : 'back'}
          </button> */}
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
          즐겨찾기
        </button>
      )}
    </div>
  )
}
export default MainTitle
