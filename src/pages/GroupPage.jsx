import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Client } from '@stomp/stompjs'
import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import useSchedule from '../hooks/useSchedule'
import {
  getGroupInfo,
  getGroupSchedule
} from '../services/Group/groupController'
import GroupContainer from '../components/GroupPage/GroupContainer'
import {
  deleteFavorite,
  postFavorite
} from '../services/Favorite/favoriteController'
import {
  addGroupChat,
  addGroupSchedule,
  removeGroupSchedule
} from '../redux/modules/groupReducer'
import ChatContainer from '../components/GroupPage/Chat/ChatContainer'

const WEBSOCKET_URL = import.meta.env.VITE_VIEW_WEBSOCKET_URL

const GroupPage = () => {
  const [client, setClient] = useState(null)

  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user)
  const weekData = useSelector(state => state.date)
  const scheduleList = useSelector(state => state.group.groupSchedule)
  const groupInfo = useSelector(state => state.group.groupInfo)
  const groupChatData = useSelector(state => state.group.groupChat)

  const [chatState, setChatState] = useState(false)
  const [chatData, setChatData] = useState('')
  const { code } = useParams()
  const {
    scheduleData,
    setScheduleData,
    resetData,
    onChangeDate,
    onChangeData
  } = useSchedule()

  useEffect(() => {
    if (!userInfo?.token) {
      console.error('User is not authenticated')
      return
    }
    dispatch(getGroupInfo(userInfo.token, code))
  }, [userInfo.token, code, dispatch])

  useEffect(() => {
    if (!userInfo?.token) {
      console.error('User is not authenticated')
      return
    }

    const stompClient = new Client({
      brokerURL: WEBSOCKET_URL,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Connected!')
        stompClient.subscribe(
          `/sub/schedule/${code}`,
          message => {
            const messageBody = JSON.parse(message.body)
            switch (messageBody.data.action) {
              case 'CREATE':
                dispatch(addGroupSchedule(messageBody.data))
                break
              case 'DELETE':
                dispatch(removeGroupSchedule(messageBody.data.id))
                break
              default:
                console.warn('Unknown action:', messageBody.data.action)
            }
          },
          { Authorization: `Bearer ${userInfo?.token}` }
        )
        stompClient.subscribe(
          `/sub/chat/room/${code}`,
          message => {
            const messageBody = JSON.parse(message.body)
            dispatch(addGroupChat(messageBody))
          },
          { Authorization: `Bearer ${userInfo?.token}` }
        )
      },
      onStompError: frame => {
        console.error('Broker reported error: ' + frame.headers['message'])
        console.error('Additional details: ' + frame.body)
      }
    })

    stompClient.activate()
    setClient(stompClient)

    return () => {
      stompClient.deactivate()
    }
  }, [userInfo.token, code, dispatch])

  useEffect(() => {
    dispatch(
      getGroupSchedule(
        userInfo.token,
        code,
        weekData.startDate,
        weekData.endDate
      )
    )
  }, [weekData.startDate, weekData.endDate])

  const sendMessage = () => {
    if (client && client.active) {
      const groupData = {
        userCode: userInfo.user.userInfo.userCode,
        groupCode: code,
        ...scheduleData
      }
      client.publish({
        destination: `/pub/schedule/create/${code}`,
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
          groupCode: code
        },
        body: JSON.stringify(groupData)
      })
      setScheduleData({
        title: '',
        content: '',
        startTime: null,
        endTime: null,
        scheduleDate: null
      })
    } else {
      console.error('Client is not connected.')
    }
  }
  const deleteSchedule = id => {
    if (client && client.active) {
      const groupData = {
        userCode: userInfo.user.userInfo.userCode,
        groupCode: code,
        scheduleId: id
      }
      client.publish({
        destination: `/pub/schedule/delete/${code}`,
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
          groupCode: code
        },
        body: JSON.stringify(groupData)
      })
      setScheduleData({
        title: '',
        content: '',
        startTime: null,
        endTime: null,
        scheduleDate: null
      })
    } else {
      console.error('Client is not connected.')
    }
  }
  const addFavoriteEvent = async () => {
    try {
      await dispatch(postFavorite(userInfo.token, code))
      alert('즐겨찾기 추가')
    } catch (error) {
      console.error('즐겨찾기 추가 중 오류 발생:', error)
    }
  }
  const deleteFavoriteEvent = async () => {
    try {
      await dispatch(deleteFavorite(userInfo.token, code))
      alert('즐겨찾기 삭제')
    } catch (error) {
      console.error('즐겨찾기 추가 중 오류 발생:', error)
    }
  }

  const toggleChatState = () => {
    setChatState(pre => !pre)
  }
  const sendChat = () => {
    if (client && client.active && chatData) {
      const chat = {
        groupCode: code,
        content: chatData,
        sender: userInfo.user.userInfo.userCode,
        type: 'CHAT'
      }
      client.publish({
        destination: `/pub/chat/${code}`,
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
          groupCode: code
        },
        body: JSON.stringify(chat)
      })

      setChatData('')
    } else {
      console.error('Client is not connected.')
    }
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div className="flex gap-2.5">
        <FavoritesContainer />
        <GroupContainer
          weekData={weekData}
          scheduleList={scheduleList}
          groupInfo={groupInfo?.data}
          addFavoriteEvent={addFavoriteEvent}
          deleteFavoriteEvent={deleteFavoriteEvent}
          deleteSchedule={deleteSchedule}
        />
        <InformationContainer
          scheduleData={scheduleData}
          onChangeData={onChangeData}
          onChangeDate={onChangeDate}
          resetData={resetData}
          createSchedule={sendMessage}
        />
        <div className="absolute right-20 bottom-20 flex flex-col items-end gap-2">
          <ChatContainer
            visible={chatState}
            groupChatData={groupChatData}
            chatData={chatData}
            setChatData={setChatData}
            sendChat={sendChat}
            userCode={userInfo.user.userInfo.userCode}
          />
          <button
            type="button"
            onClick={toggleChatState}
            className="w-[56px] h-[56px] bg-primary-100 rounded-full shadow-xl">
            {chatState ? '닫기' : '열기'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default GroupPage
