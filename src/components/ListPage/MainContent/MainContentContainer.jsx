import { useNavigate } from 'react-router-dom'
import ItemContainer from './ItemContainer'
import MainTitle from './atom/MainTitle'
import SubTitle from './atom/SubTitle'

const MainContentContainer = ({ openModal, groupData }) => {
  const nav = useNavigate(0)
  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 border border-black">
      <div className="border border-black w-full h-full flex flex-col">
        <MainTitle />
        <SubTitle text="My Plan" />
        <ItemContainer onClick={() => nav(`/personal`)} />
        <SubTitle text="Team Plan" />
        <ItemContainer
          onClick={openModal}
          groupData={groupData}
        />
      </div>
    </div>
  )
}

export default MainContentContainer
