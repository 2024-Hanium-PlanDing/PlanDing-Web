import { useState } from 'react'

const useSchedule = () => {
  const [scheduleData, setScheduleData] = useState({
    title: '',
    content: '',
    startTime: null,
    endTime: null,
    scheduleDate: null
  })
  const resetData = () => {
    setScheduleData({
      title: '',
      content: '',
      startTime: null,
      endTime: null,
      scheduleDate: null
    })
  }
  const onChangeDate = date => {
    setScheduleData(prevState => ({
      ...prevState,
      scheduleDate: date
    }))
  }
  const onChangeData = e => {
    const { name, value } = e.target
    setScheduleData(prevState => ({
      ...prevState,
      [name]:
        name === 'startTime' || name === 'endTime' ? parseInt(value, 10) : value
    }))
  }
  return {
    scheduleData,
    setScheduleData,
    resetData,
    onChangeDate,
    onChangeData
  }
}

export default useSchedule
