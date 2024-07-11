import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Client } from '@stomp/stompjs'

const WEBSOCKET_URL = import.meta.env.VITE_VIEW_WEBSOCKET_URL

const GroupPage = () => {
  const [client, setClient] = useState(null)
  const [receivedMessages, setReceivedMessages] = useState([])
  const userInfo = useSelector(state => state.user)
  const { code } = useParams()

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
            setReceivedMessages(prevMessages => [...prevMessages, messageBody])
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

  return (
    <div>
      <div>
        <h2>Received Messages:</h2>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>
              <pre>{JSON.stringify(msg, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={sendMessage}>Send Message</button>
    </div>
  )
}

export default GroupPage
