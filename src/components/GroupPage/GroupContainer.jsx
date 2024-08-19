import MainTitle from '../ListPage/MainContent/atom/MainTitle'
import ScheduleContainer from '../PersonalPage/Schedule/ScheduleContainer'

const GroupContainer = ({
  weekData,
  scheduleList,
  groupInfo,
  favoriteToggle,
  deleteSchedule
}) => {
  const [year, month] = weekData.startDate.split('-')
  const formattedDate = `${year}년 ${parseInt(month)}월`

  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 bg-white">
      <div className="w-full h-full flex flex-col gap-10 border-2 rounded-t-md border-neutrals-40">
        <div>
          <MainTitle
            text={groupInfo?.name}
            favoriteToggle={favoriteToggle}
            favoriteState={groupInfo?.isFavorite}
          />
        </div>
        <div className="flex justify-center items-center">
          <p className="text-subtitle-1 text-primary-500">{formattedDate}</p>
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
