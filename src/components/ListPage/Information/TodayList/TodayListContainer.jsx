import MoreBtn from './atom/MoreBtn'
import TodayList from './atom/TodayList'

const TodayListContainer = ({ todaySchedule }) => {
  return (
    <div className="w-[280px] h-[363px] border-primary-75 rounded-2xl border-2 p-5 flex flex-col gap-4">
      <p className="text-neutrals-800 text-subtitle-3">오늘의 일정</p>
      {todaySchedule?.data.map((data, index) => (
        <TodayList
          data={data}
          key={index}
        />
      ))}
      <MoreBtn />
    </div>
  )
}

export default TodayListContainer
