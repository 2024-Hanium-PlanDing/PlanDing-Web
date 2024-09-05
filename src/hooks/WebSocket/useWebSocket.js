import { useEffect, useState } from 'react'
import { Client } from '@stomp/stompjs'
import { useDispatch } from 'react-redux'
import {
  addGroupChat,
  addGroupSchedule,
  removeGroupSchedule
} from '../../redux/modules/groupReducer'
import {
  addGroupTodo,
  removeGroupTodo
} from '../../redux/modules/groupTodoReducer'

const useWebSocket = (token, code, WEBSOCKET_URL) => {
  const [client, setClient] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) {
      console.error('User is not authenticated')
      return
    }

    const stompClient = new Client({
      brokerURL: WEBSOCKET_URL,
      connectHeaders: {
        Authorization: `Bearer ${token}`,
        groupCode: code
      },
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
                dispatch(
                  removeGroupSchedule(
                    messageBody.data.scheduleCommonResponse.id
                  )
                )
                break
              default:
                console.warn('Unknown action:', messageBody.data.action)
            }
          },
          { Authorization: `Bearer ${token}` }
        )
        stompClient.subscribe(
          `/sub/planner/${code}`,
          message => {
            const messageBody = JSON.parse(message.body)
            switch (messageBody.data.action) {
              case 'CREATE':
                dispatch(addGroupTodo(messageBody.data))
                break
              case 'DELETE':
                dispatch(removeGroupTodo(messageBody.data.id))

                break
              default:
                console.warn('Unknown action:', messageBody.data.action)
            }
          },
          { Authorization: `Bearer ${token}` }
        )
        stompClient.subscribe(
          `/sub/chat/${code}`,
          message => {
            const messageBody = JSON.parse(message.body)
            dispatch(addGroupChat(messageBody))
          },
          { Authorization: `Bearer ${token}` }
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
  }, [token, code, dispatch, WEBSOCKET_URL])

  return client
}

export default useWebSocket
