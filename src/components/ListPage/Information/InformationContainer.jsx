import ScheduleCreateContainer from './Schedule/ScheduleCreateContainer'
import TodayListContainer from './TodayList/TodayListContainer'
import UserInfoContainer from './UserCard/UserInfoContainer'
import CustomCalendar from '../../CustomCalendar'

const InformationContainer = ({
  scheduleData,
  onChangeData,
  resetData,
  onChangeDate,
  createSchedule
}) => {
  const path = window.location.pathname

  return (
    <div className="w-[320px] h-[848px]  rounded-lg shadow-md bg-white py-5 flex-col gap-4 flex items-center ">
      <UserInfoContainer />
      <CustomCalendar />
      {path === '/list' && <TodayListContainer />}
      {path === '/personal' || path.startsWith('/group/') ? (
        <ScheduleCreateContainer
          scheduleData={scheduleData}
          onChangeData={onChangeData}
          onChangeDate={onChangeDate}
          resetData={resetData}
          createSchedule={createSchedule}
        />
      ) : null}
    </div>
  )
}

export default InformationContainer
