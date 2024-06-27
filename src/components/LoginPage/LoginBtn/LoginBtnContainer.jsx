import LoginBtn from './atom/LoginBtn'

const LoginBtnContainer = () => {
  return (
    <div className="flex flex-col gap-5">
      <LoginBtn />
      <LoginBtn />
      <div className="flex items-center w-full">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <LoginBtn />
    </div>
  )
}

export default LoginBtnContainer
