import TodayListContainer from './TodayList/TodayListContainer'
import UserInfoContainer from './UserCard/UserInfoContainer'
import Calendar from './atom/Calendar'

const InformationContainer = () => {
  return (
    <div className="w-[320px] h-[848px]  rounded-lg shadow-md bg-[#FBFBFB] p-5 flex flex-col gap-4 border border-black">
      <UserInfoContainer />
      <Calendar />
      <TodayListContainer />
    </div>
  )
}

export default InformationContainer
