const LoginBtn = ({ text, bgColor, textColor, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`W-[360px] h-[48px] flex justify-center items-center ${bgColor} ${textColor} rounded-md`}>
      {text}
    </button>
  )
}

export default LoginBtn
