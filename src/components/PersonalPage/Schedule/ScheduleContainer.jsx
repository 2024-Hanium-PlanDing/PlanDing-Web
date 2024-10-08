import { useState, useEffect } from 'react'

const ScheduleContainer = ({ weekData, scheduleList, SetSelectData }) => {
  const [schedule, setSchedule] = useState([])
  const [weekDates, setWeekDates] = useState([])
  const days = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일'
  ]
  const times = Array.from({ length: 19 }, (_, i) => `${6 + i}:00`)

  useEffect(() => {
    if (weekData.startDate && weekData.endDate) {
      const start = new Date(weekData.startDate)
      const end = new Date(weekData.endDate)
      const dates = []

      for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
        dates.push(new Date(d))
      }
      setWeekDates(dates)
    }
  }, [weekData])
  useEffect(() => {
    if (scheduleList && Array.isArray(scheduleList)) {
      const newSchedule = Array(19)
        .fill(null)
        .map(() => Array(7).fill(null))

      scheduleList.forEach(item => {
        const { scheduleDate, startTime, endTime, title, id } =
          item.scheduleCommonResponse || item // 옵셔널 체이닝으로 처리
        const date = new Date(scheduleDate)
        const dayIndex = date.getDay()
        const startHour = startTime - 6
        const endHour = endTime - 6
        const midPoint = Math.floor((startHour + endHour) / 2)

        for (let i = startHour; i < endHour; i++) {
          if (i >= 0 && i < 19) {
            newSchedule[i][dayIndex] = {
              first: i === startHour ? 'start' : '',
              id: id,
              title: i === midPoint ? title : '',
              highlight: true,
              scheduleInfo:
                i === midPoint
                  ? { scheduleDate, startTime, endTime, title, id }
                  : null
            }
          }
        }
      })

      setSchedule(newSchedule)
    }
  }, [scheduleList])

  return (
    <div className="px-5 h-full">
      <table className="min-w-full border border-neutrals-80">
        <thead>
          <tr>
            <th className="border border-neutrals-80 p-2">Time</th>
            {weekDates.map((date, index) => (
              <th
                key={index}
                className={`border border-neutrals-80 p-2 ${index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : ''}`}>
                {date.getDate()}
                <br />
                {days[index]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time, rowIndex) => (
            <tr key={rowIndex}>
              <td className="w-[92px] h-[80px] border border-neutrals-80 p-2">
                {time}
              </td>
              {days.map((_, colIndex) => (
                <td
                  key={colIndex}
                  className={`w-[120px] h-[80px] border border-neutrals-80 p-2 ${schedule[rowIndex]?.[colIndex]?.highlight ? 'bg-primary-75' : ''}`}
                  onClick={() =>
                    SetSelectData(schedule[rowIndex]?.[colIndex]?.id)
                  }
                  style={{
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    border: schedule[rowIndex]?.[colIndex]?.highlight
                      ? 'none'
                      : '1px solid black'
                  }}>
                  {schedule[rowIndex]?.[colIndex]?.title || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScheduleContainer
