import { useDispatch, useSelector } from 'react-redux'
import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import ToDoContainer from '../components/ToDoPage/ToDoContainer'
import useFavorite from '../hooks/useFavorite'
import { closeModal, openModal } from '../redux/modules/modalReducer'
import useWebSocket from '../hooks/WebSocket/useWebSocket'
import CreateTodoModal from '../components/Modal/CreateTodoModal/CreateTodoModal'
import { useState } from 'react'

const WEBSOCKET_URL = import.meta.env.VITE_VIEW_WEBSOCKET_URL

const ToDoPage = () => {
  const groupInfo = useSelector(state => state.group.groupInfo)
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user)
  const [selectedUsers, setSelectedUsers] = useState([])

  const { favoriteToggle } = useFavorite(groupInfo, dispatch, userInfo)

  const [todoData, setTodoData] = useState({
    title: '',
    content: '',
    deadline: null,
    status: '',
    managerCode: userInfo.user.userInfo.userCode,
    userCodes: [],
    scheduleId: null,
    time: null,
    date: null
  })

  const createTodoHandler = () => {
    dispatch(openModal('createTodoModal'))
  }
  const closeModalHandle = () => {
    dispatch(closeModal('createTodoModal'))
  }

  const onChangeDate = date => {
    const formattedDate = date ? date.format('YYYY-MM-DD') : null
    setTodoData(prevState => ({
      ...prevState,
      date: formattedDate
    }))
  }
  const onChangeData = e => {
    const { name, value } = e.target
    setTodoData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const client = useWebSocket(
    userInfo.token,
    groupInfo.data.groupCode,
    WEBSOCKET_URL
  )
  const createTodo = () => {
    if (client && client.active) {
      const deadline = `${todoData.date}T${todoData.time}`
      const userCodes = selectedUsers.map(user => user.userCode)

      const groupData = {
        ...todoData,
        deadline,
        userCodes,
        userCode: userInfo.user.userInfo.userCode
      }

      // time과 date 필드를 제거
      delete groupData.time
      delete groupData.date

      console.log(groupData)

      console.log(groupData)
      client.publish({
        destination: `/pub/planner/create/${groupInfo.data.groupCode}`,
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
          groupCode: groupInfo.data.groupCode
        },
        body: JSON.stringify(groupData)
      })
      setTodoData({
        title: '',
        content: '',
        deadline: null,
        status: '',
        managerCode: '',
        userCodes: [],
        scheduleId: null,
        time: null,
        date: null
      })
      closeModalHandle()
    } else {
      console.error('Client is not connected.')
    }
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div className="flex gap-2.5">
        <CreateTodoModal
          createTodo={createTodo}
          onChangeDate={onChangeDate}
          onChangeData={onChangeData}
          closeModalHandle={closeModalHandle}
          selectedUsers={selectedUsers}
          setSelectedUsers={setSelectedUsers}
        />
        <InformationContainer />
        <ToDoContainer
          favoriteToggle={favoriteToggle}
          groupInfo={groupInfo}
          createTodoHandler={createTodoHandler}
        />
        <FavoritesContainer />
      </div>
    </div>
  )
}

export default ToDoPage
