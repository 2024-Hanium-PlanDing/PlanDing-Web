import MainTitle from '../ListPage/MainContent/atom/MainTitle'
import ScheduleContainer from '../PersonalPage/Schedule/ScheduleContainer'

const GroupContainer = ({ weekData, scheduleList, groupInfo }) => {
  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 border border-black">
      <div className="border border-black w-full h-full flex flex-col">
        <div className="flex-none p-2">
          <MainTitle text={groupInfo.name} />
        </div>
        <div className="flex-grow p-2 overflow-y-scroll">
          <ScheduleContainer
            weekData={weekData}
            scheduleList={scheduleList}
          />
        </div>
      </div>
    </div>
  )
}

export default GroupContainer
