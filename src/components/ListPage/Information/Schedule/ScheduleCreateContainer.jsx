import DatePickerCalendar from './atom/DatePickerCalendar'
import ScheduleBtn from './atom/ScheduleBtn'
import SelectTimeContainer from './SelectTimeContainer'

const ScheduleCreateContainer = ({
  scheduleData,
  onChangeData,
  resetData,
  onChangeDate
}) => {
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
        onChangeData={onChangeData}
      />
      <DatePickerCalendar
        value={scheduleData.days}
        onChange={onChangeDate}
      />

      <div className="flex gap-3">
        <ScheduleBtn
          bgColor="bg-primary-200"
          text="생성하기"
        />
        <ScheduleBtn
          bgColor=""
          text="취소하기"
          onClickEvent={resetData}
        />
      </div>
    </div>
  )
}

export default ScheduleCreateContainer
