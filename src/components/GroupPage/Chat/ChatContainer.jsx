import { useState } from 'react'

const ChatContainer = ({ visible }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: '상대방 채팅', sender: 'other' },
    { id: 2, text: '내 채팅', sender: 'self' },
    {
      id: 3,
      text: '상대방 채팅 상대방 채팅 상대방 채팅 상대방 채팅 상대방 채팅 상대방 채팅 상대방 채팅 상대방 채팅',
      sender: 'other'
    },
    {
      id: 4,
      text: '내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 ',
      sender: 'self'
    },
    {
      id: 5,
      text: '내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 ',
      sender: 'self'
    },
    {
      id: 6,
      text: '내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 내 채팅 ',
      sender: 'self'
    },
    {
      id: 7,
      text: '상대방 채팅 상대방 채팅 상대방 채팅 상대방 채팅 상대방 채팅 상대방 채팅 상대방 채팅 상대방 채팅',
      sender: 'other'
    }
  ])

  return (
    <div
      className={`w-[390px] h-[690px] shadow-xl ${visible ? 'visible' : 'hidden'} border border-black rounded-lg relative bg-neutral-50 z-20`}>
      <div className="flex flex-col gap-2.5 overflow-y-auto w-full h-[570px] mt-3 px-3">
        {messages.map(message => (
          <div
            key={message.id}
            className={`max-w-[286px] min-h-[40px] px-3 py-2.5 border flex-shrink-0 border-black rounded-lg break-words ${message.sender === 'self' ? 'self-end bg-primary-200 text-neutral-50' : 'self-start bg-gray-100'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="w-full h-[102px] flex items-center justify-center absolute bottom-0">
        <input
          className="w-[344px] h-[40px] border border-primary-200 p-3 rounded-xl"
          placeholder="메시지를 입력해주세요."
        />
      </div>
    </div>
  )
}

export default ChatContainer
