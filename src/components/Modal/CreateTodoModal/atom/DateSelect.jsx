import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { DatePicker } from '@mui/x-date-pickers'

const DateSelect = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker', 'DatePicker']}>
        <DemoItem>
          <DatePicker
            sx={{
              '& .MuiInputBase-root': {
                width: '160px !important',
                height: '40px' // 텍스트 필드 높이 조정
              },
              '& .MuiInputBase-input': {
                padding: '8.5px 14px', // 입력 필드의 패딩 조정
                fontSize: '12px'
              }
            }}
          />
        </DemoItem>
        <DemoItem>
          <TimePicker
            views={['hours']}
            ampm={false} // 24시간 형식으로 변경
            sx={{
              '& .MuiInputBase-root': {
                width: '100px !important',
                height: '40px'
              },
              '& .MuiInputBase-input': {
                padding: '8.5px 14px',
                fontSize: '12px'
              }
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default DateSelect
