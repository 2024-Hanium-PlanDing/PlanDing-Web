import { useEffect } from 'react'
import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import PersonalContainer from '../components/PersonalPage/PersonalContainer'
import {
  postPersonalSchedule,
  getPersonalSchedule
} from '../services/Personal/personalController'
import { useDispatch, useSelector } from 'react-redux'
import useSchedule from '../hooks/useSchedule'

const PersonalPage = () => {
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()
  const scheduleList = useSelector(state => state.personal.persnoalSchedule)
  const weekData = useSelector(state => state.date)

  const {
    scheduleData,
    setScheduleData,
    resetData,
    onChangeDate,
    onChangeData
  } = useSchedule()

  useEffect(() => {
    dispatch(getPersonalSchedule(token, weekData.startDate, weekData.endDate))
  }, [token, weekData])

  const createSchedule = () => {
    dispatch(postPersonalSchedule(token, scheduleData))
    setScheduleData({
      title: '',
      content: '',
      startTime: null,
      endTime: null,
      scheduleDate: null
    })
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div className="flex gap-2.5">
        <FavoritesContainer />
        <PersonalContainer
          weekData={weekData}
          scheduleList={scheduleList.data}
        />
        <InformationContainer
          scheduleData={scheduleData}
          onChangeData={onChangeData}
          onChangeDate={onChangeDate}
          resetData={resetData}
          createSchedule={createSchedule}
        />
      </div>
    </div>
  )
}

export default PersonalPage
