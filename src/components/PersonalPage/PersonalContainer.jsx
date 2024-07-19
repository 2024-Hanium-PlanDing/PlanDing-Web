import MainTitle from '../ListPage/MainContent/atom/MainTitle'
import ScheduleContainer from './Schedule/ScheduleContainer'

const PersonalContainer = ({ weekData, scheduleList, deleteSchedule }) => {
  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 border border-black">
      <div className="border border-black w-full h-full flex flex-col">
        <div className="flex-none p-2">
          <MainTitle />
        </div>
        <div className="flex-grow p-2 overflow-y-scroll">
          <ScheduleContainer
            weekData={weekData}
            scheduleList={scheduleList}
            deleteSchedule={deleteSchedule}
          />
        </div>
      </div>
    </div>
  )
}
export default PersonalContainer
