import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Chat from '../assets/chat.svg'

import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import useSchedule from '../hooks/useSchedule'
import {
  getGroupInfo,
  getGroupSchedule
} from '../services/Group/groupController'
import GroupContainer from '../components/GroupPage/GroupContainer'

import ChatContainer from '../components/GroupPage/Chat/ChatContainer'
import { postInvitation } from '../services/Group/inviteController'
import { postChat } from '../services/Chat/chatController'
import useWebSocket from '../hooks/WebSocket/useWebSocket'

import useFavorite from '../hooks/useFavorite'
import InviteGroupModal from '../components/Modal/InviteGroupModal/InviteGroupModal'
import { closeModal, openModal } from '../redux/modules/modalReducer'

const WEBSOCKET_URL = import.meta.env.VITE_VIEW_WEBSOCKET_URL

const GroupPage = () => {
  const inputRef = useRef()
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user)
  const weekData = useSelector(state => state.date)
  const scheduleList = useSelector(state => state.group.groupSchedule)
  const groupInfo = useSelector(state => state.group.groupInfo)
  const groupChatData = useSelector(state => state.group.groupChat)

  const modalState = useSelector(state => state.modal.inviteGroupModal)

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
  }, [weekData.startDate, weekData.endDate, code])

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

  const { favoriteToggle } = useFavorite(groupInfo, dispatch, userInfo, code)

  const toggleChatState = () => {
    setChatState(pre => !pre)
  }
  const sendChat = async () => {
    if (chatData) {
      await postChat(userInfo.token, chatData, code)
      setChatData('')
    }
  }

  const openInviteModal = async () => {
    await dispatch(openModal('inviteGroupModal'))
  }
  const closeModalHandle = () => {
    dispatch(closeModal('inviteGroupModal'))
  }
  const inviteHandle = async () => {
    if (inputRef.current && inputRef.current.value) {
      const userCode = inputRef.current.value.trim()
      if (!userCode) {
        alert('사용자 코드를 입력해주세요.')
        return
      }
      try {
        await postInvitation(
          userInfo?.token,
          groupInfo.data.groupCode,
          userCode
        )
        alert('초대 했습니다.')
        closeModalHandle()
      } catch (error) {
        console.error('초대하는 중 오류가 발생했습니다:', error)
      }
    } else {
      alert('사용자 코드를 입력할 수 없습니다.')
    }
  }
  if (!userInfo || !groupInfo?.data) {
    return null
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <InviteGroupModal
        inputRef={inputRef}
        inviteHandle={inviteHandle}
        modalState={modalState}
        closeModalHandle={closeModalHandle}
      />

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
          openInviteModal={openInviteModal}
        />
        <div className="relative">
          <div className="flex flex-col gap-2 items-center">
            <FavoritesContainer />
            <button
              type="button"
              onClick={toggleChatState}
              className="w-[72px] h-[72px] bg-primary-400 flex justify-center items-center rounded-full shadow-xl">
              <img
                src={Chat}
                alt="채팅"
              />
            </button>
          </div>
          <div className="absolute right-0 bottom-20 flex flex-col items-end gap-2">
            <ChatContainer
              visible={chatState}
              groupChatData={groupChatData}
              chatData={chatData}
              setChatData={setChatData}
              sendChat={sendChat}
              userCode={userInfo?.user.userInfo.userCode}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupPage
