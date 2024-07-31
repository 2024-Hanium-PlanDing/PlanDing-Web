const ChatContainer = ({
  visible,
  groupChatData,
  chatData,
  setChatData,
  sendChat,
  userCode
}) => {
  return (
    <div
      className={`w-[390px] h-[690px] shadow-xl ${visible ? 'visible' : 'hidden'} border border-black rounded-lg relative bg-neutral-50 z-20`}>
      <div className="flex flex-col gap-2.5 overflow-y-auto w-full h-[570px] mt-3 px-3">
        {groupChatData?.map(message => (
          <div
            key={message.data.id}
            className={`max-w-[286px] min-h-[40px] px-3 py-2.5 border flex-shrink-0 border-black rounded-lg break-words ${message.data.userCode === userCode ? 'self-end bg-primary-200 text-neutral-50' : 'self-start bg-gray-100'}`}>
            {message.data.message}
          </div>
        ))}
      </div>
      <div className="w-full h-[102px] flex items-center justify-center absolute bottom-0">
        <input
          className="w-[344px] h-[40px] border border-primary-200 p-3 rounded-xl"
          placeholder="메시지를 입력해주세요."
          value={chatData}
          onChange={e => setChatData(e.target.value)}
        />
        <button onClick={sendChat}>전송</button>
      </div>
    </div>
  )
}

export default ChatContainer
