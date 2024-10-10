import { useEffect } from 'react'
import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import PersonalContainer from '../components/PersonalPage/PersonalContainer'
import {
  postPersonalSchedule,
  getPersonalSchedule,
  deletePersonalSchedule
} from '../services/Personal/personalController'
import { useDispatch, useSelector } from 'react-redux'
import useSchedule from '../hooks/useSchedule'

const PersonalPage = () => {
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()
  const scheduleList = useSelector(state => state.personal.personalSchedule)
  const weekData = useSelector(state => state.date)

  const {
    scheduleData,
    setScheduleData,
    resetData,
    onChangeDate,
    onChangeData
  } = useSchedule()

  useEffect(() => {
    dispatch(getPersonalSchedule(weekData.startDate, weekData.endDate))
  }, [token, weekData])

  const createSchedule = () => {
    dispatch(postPersonalSchedule(scheduleData))
    setScheduleData({
      title: '',
      content: '',
      startTime: null,
      endTime: null,
      scheduleDate: null
    })
  }
  const deleteSchedule = id => {
    dispatch(deletePersonalSchedule(id))
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div className="flex gap-2.5">
        <InformationContainer
          scheduleData={scheduleData}
          onChangeData={onChangeData}
          onChangeDate={onChangeDate}
          resetData={resetData}
          createSchedule={createSchedule}
        />
        <PersonalContainer
          weekData={weekData}
          scheduleList={scheduleList}
          deleteSchedule={deleteSchedule}
        />
        <FavoritesContainer />
      </div>
    </div>
  )
}

export default PersonalPage
