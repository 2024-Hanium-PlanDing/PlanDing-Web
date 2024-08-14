import DatePickerCalendar from './atom/DatePickerCalendar'
import ScheduleBtn from './atom/ScheduleBtn'
import SelectTimeContainer from './SelectTimeContainer'

const ScheduleCreateContainer = ({
  scheduleData,
  onChangeData,
  resetData,
  onChangeDate,
  createSchedule
}) => {
  return (
    <div className="w-[280px] h-[373px] p-5 border-[2px] border-primary-75 rounded-md flex flex-col gap-4 items-center bg-white">
      <input
        placeholder="제목을 입력해주세요."
        className="w-[240px] h-[41px] p-3 border border-neutrals-40 rounded-md text-caption placeholder-neutrals-60"
        type="text"
        name="title"
        value={scheduleData?.title}
        onChange={onChangeData}
      />
      <textarea
        name="content"
        value={scheduleData?.content}
        onChange={onChangeData}
        placeholder="일정 내용을 입력해주세요."
        className="w-[240px] h-[120px] p-3 border border-neutrals-40 rounded-md text-caption placeholder-neutrals-60 shrink-0 resize-none"
      />
      <SelectTimeContainer
        scheduleData={scheduleData}
        onChangeData={onChangeData}
      />
      <DatePickerCalendar
        value={scheduleData.scheduleDate}
        onChange={onChangeDate}
      />

      <div className="flex gap-3">
        <ScheduleBtn
          bgColor="bg-primary-200"
          textColor="text-white"
          text="생성하기"
          onClickEvent={createSchedule}
        />
        <ScheduleBtn
          bgColor=""
          text="취소하기"
          textColor="text-primary-200"
          onClickEvent={resetData}
        />
      </div>
    </div>
  )
}

export default ScheduleCreateContainer
