import MoreBtn from './atom/MoreBtn'
import TodayList from './atom/TodayList'

const TodayListContainer = ({ todaySchedule }) => {
  return (
    <div className="w-[280px] h-[363px] border-primary-75 rounded-2xl border-2 p-4 flex flex-col gap-4">
      <p className="text-neutrals-800 text-subtitle-3">오늘의 일정</p>
      <div className="w-full h-full flex flex-col gap-4 overflow-y-auto overflow-x-hidden items-center">
        {todaySchedule?.data.map((data, index) => (
          <TodayList
            data={data.scheduleCommonResponse}
            key={index}
          />
        ))}
      </div>
      <div>
        <MoreBtn />
      </div>
    </div>
  )
}

export default TodayListContainer
