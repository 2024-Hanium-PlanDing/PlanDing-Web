import ItemContainer from './ItemContainer'
import MainTitle from './atom/MainTitle'
import SubTitle from './atom/SubTitle'

const MainContentContainer = () => {
  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 border border-black">
      <div className="border border-black w-full h-full flex flex-col">
        <MainTitle />
        <SubTitle text="My Plan" />
        <ItemContainer />
        <SubTitle text="Team Plan" />
        <ItemContainer />
      </div>
    </div>
  )
}

export default MainContentContainer
