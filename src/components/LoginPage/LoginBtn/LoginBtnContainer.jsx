import LoginBtn from './atom/LoginBtn'

const LoginBtnContainer = () => {
  return (
    <div className="flex flex-col gap-5">
      <LoginBtn
        text="Login"
        bgColor="bg-primary-300"
        textColor="text-neutrals-10"
      />
      <LoginBtn
        text="Sign In"
        bgColor="bg-neutrals-30"
        textColor="text-neutrals-600"
      />
      <div className="flex items-center w-full">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <LoginBtn
        text="Login"
        bgColor="bg-[#FFE20A]"
        textColor="text-neutrals-600"
      />
    </div>
  )
}

export default LoginBtnContainer
