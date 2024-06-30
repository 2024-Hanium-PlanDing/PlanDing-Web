const LoginBtn = ({ text, bgColor, textColor }) => {
  return (
    <button
      type="button"
      className={`W-[360px] h-[48px] flex justify-center items-center ${bgColor} ${textColor} rounded-md`}>
      {text}
    </button>
  )
}

export default LoginBtn
