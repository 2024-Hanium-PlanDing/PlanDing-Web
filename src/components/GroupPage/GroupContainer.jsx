import MainTitle from '../ListPage/MainContent/atom/MainTitle'
import ScheduleContainer from '../PersonalPage/Schedule/ScheduleContainer'

const GroupContainer = ({
  weekData,
  scheduleList,
  groupInfo,
  addFavoriteEvent,
  deleteFavoriteEvent,
  deleteSchedule
}) => {
  const [year, month] = weekData.startDate.split('-')
  const formattedDate = `${year}년 ${parseInt(month)}월`
  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 bg-white">
      <div className="w-full h-full flex flex-col gap-10 border-2 rounded-t-md border-neutrals-40">
        <div className="flex-none p-2">
          <div>
            <MainTitle text={groupInfo?.name} />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-subtitle-1 text-primary-500">{formattedDate}</p>
          </div>
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
            deleteSchedule={deleteSchedule}
          />
        </div>
      </div>
    </div>
  )
}

export default GroupContainer
