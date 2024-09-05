import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const SelectTodo = ({ scheduleList, onChangeData }) => {
  const [scheduleId, setScheduleId] = React.useState('')

  const handleChange = e => {
    onChangeData(e)
    setScheduleId(e.target.value)
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">스케줄</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={scheduleId}
          name="scheduleId"
          label="scheduleId"
          onChange={handleChange}
          sx={{
            fontSize: '14px',
            height: '40px',
            width: '392px'
          }}>
          {scheduleList.map((data, index) => (
            <MenuItem
              value={data.scheduleCommonResponse.id}
              key={index}>
              {data.scheduleCommonResponse.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectTodo
