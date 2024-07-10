import { useState } from 'react'
import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import PersonalContainer from '../components/PersonalPage/PersonalContainer'

const PersonalPage = () => {
  const [scheduleData, setScheduleData] = useState({
    title: '',
    content: '',
    startTime: null,
    endTime: null
  })
  const resetData = () => {
    setScheduleData({
      title: '',
      content: '',
      startTime: null,
      endTime: null
    })
  }

  const onChangeData = e => {
    const { name, value } = e.target
    setScheduleData(prevState => ({
      ...prevState,
      [name]:
        name === 'startTime' || name === 'endTime' ? parseInt(value, 10) : value
    }))
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div className="flex gap-2.5">
        <FavoritesContainer />
        <PersonalContainer />
        <InformationContainer
          scheduleData={scheduleData}
          onChangeData={onChangeData}
          resetData={resetData}
        />
      </div>
    </div>
  )
}

export default PersonalPage
