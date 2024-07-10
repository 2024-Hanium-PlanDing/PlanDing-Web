import SelectTimeContainer from './SelectTimeContainer'

const ScheduleCreateContainer = ({ scheduleData, onChangeData }) => {
  return (
    <div className="w-[280px] h-[373px] border-[2px] border-primary-75 rounded-md flex flex-col items-center bg-white">
      <input
        placeholder="제목을 입력해주세요."
        className="w-[240px] h-[41px] p-3 border border-neutrals-40 rounded-md"
        type="text"
        name="title"
        value={scheduleData?.title}
        onChange={onChangeData}
      />
      <input
        name="content"
        value={scheduleData?.content}
        onChange={onChangeData}
        placeholder="일정 내용을 입력해주세요."
        className="w-[240px] h-[120px] p-3 border border-neutrals-40 rounded-md"
      />
      <SelectTimeContainer
        scheduleData={scheduleData}
        onchange={onChangeData}
      />
    </div>
  )
}

export default ScheduleCreateContainer
