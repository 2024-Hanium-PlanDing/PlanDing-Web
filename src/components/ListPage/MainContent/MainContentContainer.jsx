import { useNavigate } from 'react-router-dom'
import ItemContainer from './ItemContainer'
import MainTitle from './atom/MainTitle'
import SubTitle from './atom/SubTitle'

const MainContentContainer = ({ openModal, groupData, userInfo }) => {
  const nav = useNavigate(0)
  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 bg-white">
      <div className="border border-primary-300 rounded-md w-full h-full flex flex-col">
        <MainTitle />
        <SubTitle text="나의 일정" />
        <ItemContainer
          onClick={() => nav(`/personal`)}
          first="개인 일정"
        />
        <SubTitle text="팀 일정" />
        <ItemContainer
          onClick={openModal}
          groupData={groupData}
          first="그룹 생성"
          userInfo={userInfo}
        />
      </div>
    </div>
  )
}

export default MainContentContainer
