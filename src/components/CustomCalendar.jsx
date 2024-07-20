import { useState, useEffect } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { setDate } from '../redux/modules/calendarReducer'

const CustomCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const dispatch = useDispatch()

  useEffect(() => {
    const startOfWeek = selectedDate.startOf('week')
    const endOfWeek = selectedDate.endOf('week')
    const weekNumber = selectedDate.week()
    dispatch(
      setDate(
        startOfWeek.format('YYYY-MM-DD'),
        endOfWeek.format('YYYY-MM-DD'),
        weekNumber
      )
    )
  }, [selectedDate, dispatch])

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="w-full">
        <DateCalendar
          value={selectedDate}
          onChange={newValue => setSelectedDate(newValue)}
        />
      </div>
    </LocalizationProvider>
  )
}

export default CustomCalendar
