const LoginInput = ({ text }) => {
  return (
    <div className="flex flex-col">
      <p className="mb-4">{text}</p>
      <input
        type="text"
        className="w-[360px] h-[48px] py-4 pl-5 border border-[#BEBEBE] rounded-md focus:outline-none focus:ring-0 focus:border-[#BEBEBE]"
      />
    </div>
  )
}

export default LoginInput
