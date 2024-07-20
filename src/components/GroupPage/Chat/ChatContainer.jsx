const ChatContainer = ({ visible }) => {
  return (
    <div
      className={`w-[400px] h-[800px] shadow-xl ${visible ? 'visible' : 'hidden'} border border-black rounded-lg bg-neutral-50 z-20`}></div>
  )
}
export default ChatContainer
