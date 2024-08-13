const TodayList = ({ data }) => {
  return (
    <div className="w-[240px] h-[65px] py-2 px-2.5 border border-neutrals-80 rounded-lg">
      <p className="text-overline text-neutrals-600 mb-2.5">
        {`  ${data.startTime}시 부터 ${data.endTime}시 까지`}
      </p>
      <p className="text-caption text-neutrals-600">
        {`그룹 : ${data.groupName} / 일정 :  ${data.content}`}
      </p>
    </div>
  )
}

export default TodayList
