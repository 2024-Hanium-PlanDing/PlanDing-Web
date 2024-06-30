import LoginInput from './atom/LoginInput'

const LoginFormContainer = () => {
  return (
    <div className="w-[360px] h-[229px] flex flex-col gap-5">
      <LoginInput text="User Name" />
      <LoginInput text="PassWord" />
    </div>
  )
}

export default LoginFormContainer
