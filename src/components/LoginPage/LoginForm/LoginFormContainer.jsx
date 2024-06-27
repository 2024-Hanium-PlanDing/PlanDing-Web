import LoginInput from './atom/LoginInput'

const LoginFormContainer = () => {
  return (
    <div className="w-[360px] h-[229px] border border-solid border-black flex flex-col gap-5">
      <LoginInput />
      <LoginInput />
    </div>
  )
}

export default LoginFormContainer
