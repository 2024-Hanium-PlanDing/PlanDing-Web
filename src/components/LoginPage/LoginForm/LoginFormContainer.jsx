import LoginInput from './atom/LoginInput'

const LoginFormContainer = () => {
  return (
    <div className="w-[360px] h-[229px] flex flex-col gap-5">
      <LoginInput
        text="User Name"
        textSize="text-body"
        textColor="text-neutrals-800"
      />
      <LoginInput
        text="PassWord"
        textSize="text-body"
        textColor="text-neutrals-800"
      />
    </div>
  )
}

export default LoginFormContainer
