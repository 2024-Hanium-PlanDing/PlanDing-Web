import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

export default function SelectTimeContainer({ scheduleData, onChangeData }) {
  const createTimeOptions = (start, end, exclude) => {
    const options = []
    for (let i = start; i <= end; i++) {
      if (i !== exclude) {
        options.push(
          <MenuItem
            value={i}
            key={i}
            sx={{ fontSize: '14px' }}>
            {`${i}시`}
          </MenuItem>
        )
      }
    }
    return options
  }

  return (
    <div className="w-full h-[36px] flex items-center justify-center">
      <FormControl
        variant="standard"
        sx={{ m: 1, width: '80px', height: '36px' }}>
        <Select
          labelId="demo-simple-select-standard-label-startTime"
          id="demo-simple-select-standard-startTime"
          value={scheduleData?.startTime || ''}
          name="startTime"
          onChange={onChangeData}
          label="startTime"
          sx={{ fontSize: '14px', width: '80px', height: '36px' }}>
          {createTimeOptions(6, 23)}
        </Select>
      </FormControl>
      <p className="text-[12px] text-neutrals-200">부터</p>
      <FormControl
        variant="standard"
        sx={{ m: 1, width: '80px', height: '36px' }}>
        <Select
          labelId="demo-simple-select-standard-label-endTime"
          id="demo-simple-select-standard-endTime"
          value={scheduleData?.endTime || ''}
          onChange={onChangeData}
          name="endTime"
          label="endTime"
          sx={{ fontSize: '14px', width: '80px', height: '36px' }}>
          {createTimeOptions(6, 24)}
        </Select>
      </FormControl>
      <p className="text-[12px] text-neutrals-200">까지</p>
    </div>
  )
}
