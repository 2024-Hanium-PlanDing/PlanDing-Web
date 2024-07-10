const ScheduleBtn = ({ bgColor, text, onClickEvent }) => {
  return (
    <button
      type="button"
      onClick={onClickEvent}
      className={`w-[114px] h-[36px] rounded-sm ${bgColor}`}>
      {text}
    </button>
  )
}

export default ScheduleBtn
