import TodayList from './atom/TodayList'

const TodayListContainer = () => {
  return (
    <div className="w-[280px] h-[363px] border border-black rounded-sm p-5 flex flex-col gap-4">
      <p>오늘의 일정</p>
      <TodayList />
      <TodayList />
      <TodayList />
    </div>
  )
}

export default TodayListContainer
