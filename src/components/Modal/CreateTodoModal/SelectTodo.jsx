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
        <InputLabel id="demo-simple-select-label">List</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={scheduleId}
          name="scheduleId"
          label="scheduleId"
          onChange={handleChange}>
          {scheduleList.map((data, index) => (
            <MenuItem
              value={data.id}
              key={index}>
              {data.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectTodo
