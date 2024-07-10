import ScheduleCreateContainer from './Schedule/ScheduleCreateContainer'
import TodayListContainer from './TodayList/TodayListContainer'
import UserInfoContainer from './UserCard/UserInfoContainer'
import Calendar from './atom/Calendar'

const InformationContainer = ({
  scheduleData,
  onChangeData,
  resetData,
  onChangeDate
}) => {
  const path = window.location.pathname

  return (
    <div className="w-[320px] h-[848px]  rounded-lg shadow-md bg-[#FBFBFB] p-5 flex flex-col gap-4 border border-black">
      <UserInfoContainer />
      <Calendar />
      {path === '/list' && <TodayListContainer />}
      {path === '/personal' && (
        <ScheduleCreateContainer
          scheduleData={scheduleData}
          onChangeData={onChangeData}
          onChangeDate={onChangeDate}
          resetData={resetData}
        />
      )}
    </div>
  )
}

export default InformationContainer
