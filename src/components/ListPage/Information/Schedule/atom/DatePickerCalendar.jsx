import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

const DatePickerCalendar = ({ value, onChange }) => {
  const handleDateChange = date => {
    onChange(date ? dayjs(date).format('YYYY-MM-DD') : '')
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="날짜를 선택해 주세요."
        value={value ? dayjs(value) : null}
        onChange={handleDateChange}
      />
    </LocalizationProvider>
  )
}

export default DatePickerCalendar
