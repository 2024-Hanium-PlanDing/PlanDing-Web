import { useState, useEffect } from 'react'

const ScheduleContainer = ({ weekData }) => {
  const [schedule, setSchedule] = useState([])
  const [weekDates, setWeekDates] = useState([])
  console.log(setSchedule)

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

  return (
    <div className="px-5 h-full">
      <table className="min-w-full border border-black">
        <thead>
          <tr>
            <th className="border border-black p-2">Time</th>
            {weekDates.map((date, index) => (
              <th
                key={index}
                className={`border border-black p-2 ${index === 0 ? 'text-red-500' : index === 6 ? 'text-blue-500' : ''}`}>
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
              <td className="w-[92px] h-[80px] border border-black p-2">
                {time}
              </td>
              {days.map((_, colIndex) => (
                <td
                  key={colIndex}
                  className={`w-[120px] h-[80px] border border-black p-2 ${schedule[rowIndex]?.[colIndex] ? 'bg-yellow-200' : ''}`}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ScheduleContainer
