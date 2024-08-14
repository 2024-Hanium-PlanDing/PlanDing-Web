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
        value={value ? dayjs(value) : null}
        onChange={handleDateChange}
        sx={{
          width: '240px', // 박스 가로 크기 조정
          '& .MuiInputBase-root': {
            height: '36px', // 전체 박스 높이 조정
            display: 'flex',
            alignItems: 'center' // 가운데 정렬
          },
          '& .MuiOutlinedInput-input': {
            fontSize: '14px', // 입력 필드 글자 크기 조정
            padding: '8px' // 입력 필드 패딩 조정
          },

          '& .MuiSvgIcon-root': {
            fontSize: '20px' // 캘린더 아이콘 크기 조정
          }
        }}
      />
    </LocalizationProvider>
  )
}

export default DatePickerCalendar
