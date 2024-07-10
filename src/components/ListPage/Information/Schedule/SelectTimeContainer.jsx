import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SelectTimeContainer({ scheduleData, onchange }) {
  const createTimeOptions = (start, end, exclude) => {
    const options = []
    for (let i = start; i <= end; i++) {
      if (i !== exclude) {
        options.push(
          <MenuItem
            value={i}
            key={i}>
            {`${i}:00`}
          </MenuItem>
        )
      }
    }
    return options
  }

  return (
    <div>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label-startTime">
          startTime
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label-startTime"
          id="demo-simple-select-standard-startTime"
          value={scheduleData?.startTime}
          name="startTime"
          onChange={onchange}
          label="startTime">
          {createTimeOptions(6, 23, scheduleData?.endTime)}
        </Select>
      </FormControl>
      <FormControl
        variant="standard"
        sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label-endTime">
          endTime
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label-endTime"
          id="demo-simple-select-standard-endTime"
          value={scheduleData?.endTime}
          onChange={onchange}
          name="endTime"
          label="endTime">
          {createTimeOptions(6, 23, scheduleData?.endTime)}
        </Select>
      </FormControl>
    </div>
  )
}
