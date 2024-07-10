import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import MainContentContainer from '../components/ListPage/MainContent/MainContentContainer'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../redux/modules/modalReducer'
import { useEffect, useState } from 'react'
import { setGroupList } from '../services/Group/groupController'

const ListPage = () => {
  const userInfo = useSelector(state => state.user)
  const dispatch = useDispatch()
  const groupData = useSelector(state => state.group.groups)
  const [scheduleData, setScheduleData] = useState({
    title: '',
    content: '',
    startTime: '',
    endTime: ''
  })
  const openModalHandle = () => {
    dispatch(openModal())
  }
  const onChangeData = e => {
    const { name, value } = e.target
    setScheduleData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  useEffect(() => {
    dispatch(setGroupList(userInfo.token))
  }, [dispatch, userInfo.token])
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div className="flex gap-2.5">
        <FavoritesContainer />
        <MainContentContainer
          openModal={openModalHandle}
          groupData={groupData?.data}
        />
        <InformationContainer
          scheduleData={scheduleData}
          onChangeData={onChangeData}
        />
      </div>
    </div>
  )
}

export default ListPage
