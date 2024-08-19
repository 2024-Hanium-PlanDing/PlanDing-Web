import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

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

import ChatContainer from '../components/GroupPage/Chat/ChatContainer'
import { postInvitation } from '../services/Group/inviteController'
import { postChat } from '../services/Chat/chatController'
import useWebSocket from '../hooks/WebSocket/useWebSocket'
import { toggleFavorite } from '../redux/modules/groupReducer'

const WEBSOCKET_URL = import.meta.env.VITE_VIEW_WEBSOCKET_URL

const GroupPage = () => {
  const inputRef = useRef()
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

  const client = useWebSocket(userInfo.token, code, WEBSOCKET_URL)

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

  const favoriteToggle = async () => {
    try {
      if (groupInfo.data.isFavorite) {
        deleteFavoriteEvent()
      } else {
        addFavoriteEvent()
      }
      dispatch(toggleFavorite()) // 상태 업데이트를 위한 액션 디스패치
    } catch (error) {
      console.error(error)
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

  const sendChat = async () => {
    if (chatData) {
      await postChat(userInfo.token, chatData, code)
      setChatData('')
    }
  }

  const inviteHandle = async () => {
    const userCode = inputRef.current.value
    try {
      await postInvitation(userInfo?.token, groupInfo.data.id, userCode)
      alert('초대 했습니다.')
    } catch (error) {
      error.log(error)
    }
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div>
        <input
          ref={inputRef}
          className="border border-black"
          type="text"
        />
        <button
          type="button"
          onClick={inviteHandle}>
          초대하기
        </button>
      </div>

      <div className="flex gap-2.5">
        <InformationContainer
          scheduleData={scheduleData}
          onChangeData={onChangeData}
          onChangeDate={onChangeDate}
          resetData={resetData}
          createSchedule={sendMessage}
        />
        <GroupContainer
          weekData={weekData}
          scheduleList={scheduleList}
          groupInfo={groupInfo?.data}
          favoriteToggle={favoriteToggle}
          deleteSchedule={deleteSchedule}
        />
        <FavoritesContainer />

        <div className="absolute right-20 bottom-20 flex flex-col items-end gap-2">
          <ChatContainer
            visible={chatState}
            groupChatData={groupChatData}
            chatData={chatData}
            setChatData={setChatData}
            sendChat={sendChat}
            userCode={userInfo?.user.userInfo.userCode}
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
