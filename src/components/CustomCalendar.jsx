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
      <div className="w-[280px] h-[280px]">
        <DateCalendar
          value={selectedDate}
          onChange={newValue => setSelectedDate(newValue)}
          sx={{
            width: '280px',
            height: '280px',
            '.MuiDayCalendar-root': {
              fontSize: '0.75rem', // 폰트 크기 줄이기
              backgroundColor: '#f6f6f8'
            },
            '.MuiPickersDay-root': {
              width: '32px', // 날짜 셀의 너비
              height: '32px' // 날짜 셀의 높이
            },
            '.MuiPickersCalendarHeader-root': {
              backgroundColor: '#f6f6f8'
            }
          }}
        />
      </div>
    </LocalizationProvider>
  )
}

export default CustomCalendar
