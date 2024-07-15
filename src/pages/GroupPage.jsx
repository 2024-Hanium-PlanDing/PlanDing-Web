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
import { postFavorite } from '../services/Favorite/favoriteController'

const WEBSOCKET_URL = import.meta.env.VITE_VIEW_WEBSOCKET_URL

const GroupPage = () => {
  const [client, setClient] = useState(null)

  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user)
  const weekData = useSelector(state => state.date)
  const scheduleList = useSelector(state => state.group.groupSchedule)
  const groupInfo = useSelector(state => state.group.groupInfo)
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

    const stompClient = new Client({
      brokerURL: WEBSOCKET_URL,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Connected!')
        stompClient.subscribe(
          `/sub/schedule/${code}`,
          message => {
            const messageBody = JSON.parse(message.body)
            setScheduleData(prevMessages =>
              Array.isArray(prevMessages)
                ? [...prevMessages, messageBody]
                : [messageBody]
            )
            console.log('Received message:', messageBody)
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
  }, [userInfo, code])

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
      const message = {
        userCode: userInfo.user.userInfo.userCode,
        groupCode: code,
        title: 'title',
        content: 'content',
        scheduleDate: '2024-07-16',
        startTime: 7,
        endTime: 8,
        action: 'CREATE'
      }

      client.publish({
        destination: `/pub/schedule/${code}`,
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
          groupCode: code
        },
        body: JSON.stringify(message)
      })
      console.log('Sent message:', message)
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

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div className="flex gap-2.5">
        <FavoritesContainer />
        <GroupContainer
          weekData={weekData}
          scheduleList={scheduleList.data}
          groupInfo={groupInfo?.data}
          addFavoriteEvent={addFavoriteEvent}
        />
        <InformationContainer
          scheduleData={scheduleData}
          onChangeData={onChangeData}
          onChangeDate={onChangeDate}
          resetData={resetData}
          createSchedule={sendMessage}
        />
      </div>
    </div>
  )
}

export default GroupPage
