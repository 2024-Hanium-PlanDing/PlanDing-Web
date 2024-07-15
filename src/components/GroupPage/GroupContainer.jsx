import MainTitle from '../ListPage/MainContent/atom/MainTitle'
import ScheduleContainer from '../PersonalPage/Schedule/ScheduleContainer'

const GroupContainer = ({
  weekData,
  scheduleList,
  groupInfo,
  addFavoriteEvent,
  deleteFavoriteEvent
}) => {
  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 border border-black">
      <div className="border border-black w-full h-full flex flex-col">
        <div className="flex-none p-2">
          <MainTitle text={groupInfo?.name} />
          <button
            className="border border-black mr-4"
            onClick={addFavoriteEvent}>
            추가
          </button>
          <button
            className="border border-black"
            onClick={deleteFavoriteEvent}>
            삭제
          </button>
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
