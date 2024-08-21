import ScheduleCreateContainer from './Schedule/ScheduleCreateContainer'
import TodayListContainer from './TodayList/TodayListContainer'
import UserInfoContainer from './UserCard/UserInfoContainer'
import CustomCalendar from '../../CustomCalendar'
import AlarmModal from '../../Modal/AlarmModal/AlarmModal'
import { useState } from 'react'

const InformationContainer = ({
  scheduleData,
  onChangeData,
  resetData,
  onChangeDate,
  createSchedule,
  todaySchedule,
  alarmState,
  setAlarmState
}) => {
  const [alarmModal, setAlarmModal] = useState(false)
  const path = window.location.pathname
  const pathEnd = path.split('/').pop()
  return (
    <div className="w-[320px] h-[848px] relative rounded-lg shadow-md bg-white py-5 flex-col gap-4 flex items-center ">
      <UserInfoContainer
        setAlarmModal={setAlarmModal}
        alarmState={alarmState}
        setAlarmState={setAlarmState}
      />
      {alarmModal ? <AlarmModal /> : null}

      <CustomCalendar />
      {path === '/list' && <TodayListContainer todaySchedule={todaySchedule} />}

      {(path === '/personal' ||
        (path.startsWith('/group/') && pathEnd !== 'todo')) && (
        <ScheduleCreateContainer
          scheduleData={scheduleData}
          onChangeData={onChangeData}
          onChangeDate={onChangeDate}
          resetData={resetData}
          createSchedule={createSchedule}
        />
      )}
    </div>
  )
}

export default InformationContainer
