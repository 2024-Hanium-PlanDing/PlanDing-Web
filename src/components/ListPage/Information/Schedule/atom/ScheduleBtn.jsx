const ScheduleBtn = ({ bgColor, text, onClickEvent, textColor }) => {
  return (
    <button
      type="button"
      onClick={onClickEvent}
      className={`w-[114px] h-[36px] rounded-sm text-button ${bgColor} ${textColor}`}>
      {text}
    </button>
  )
}

export default ScheduleBtn
