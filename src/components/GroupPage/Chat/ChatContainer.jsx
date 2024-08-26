import Send from '../../../assets/send.svg'

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
      className={`w-[386px] h-[503px] shadow-xl ${visible ? 'visible' : 'hidden'} rounded-lg relative bg-neutral-20 z-20`}>
      <div className="flex flex-col gap-2.5 overflow-y-auto w-full h-[389px] mt-4 px-3 bg-neutrals-20">
        {groupChatData?.map(message => (
          <div
            key={message.data.id}
            className={`flex flex-col mb-4 ${message.data.userCode === userCode ? 'items-end' : 'items-start'}`}>
            <div className="flex items-end">
              <img
                src={message.data.profileImage}
                alt="프로필"
                className="w-9 h-9 rounded-full mr-2"
              />
              <span
                className={`text-sm font-semibold ${message.data.userCode === userCode ? 'text-right' : 'text-left'}`}>
                {message.data.name}
              </span>
            </div>
            <div
              className={`max-w-[286px] min-h-[40px] px-3 py-2.5 border border-black rounded-lg break-words mt-1 ${message.data.userCode === userCode ? 'bg-primary-200 text-neutral-50 self-end' : 'bg-gray-100 self-start'}`}>
              {message.data.message}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-[114px] flex items-end gap-2 absolute bg-neutrals-0 bottom-0 p-4 text-body">
        <textarea
          className="w-[310px] h-[82px] bg-neutrals-20 p-2 rounded-lg resize-none"
          placeholder="메시지를 입력해주세요."
          value={chatData}
          onChange={e => setChatData(e.target.value)}
        />
        <button
          onClick={sendChat}
          className="w-8 h-8 bg-primary-400 rounded-full flex justify-center items-center">
          <img
            src={Send}
            alt="전송"
          />
        </button>
      </div>
    </div>
  )
}

export default ChatContainer
