import Logo from '../assets/LoginLogo.svg'
import LoginBtnContainer from '../components/LoginPage/LoginBtn/LoginBtnContainer'
import LoginFormContainer from '../components/LoginPage/LoginForm/LoginFormContainer'
import LoginTextcontainer from '../components/LoginPage/LoginText/LoginTextcontainer'

export const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL

const LoginPage = () => {
  const kakaoLogin = () => {
    window.location.href = VITE_SERVER_URL + '/oauth2/authorization/kakao'
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F5F5FD]">
      <div className="w-[1180px] h-[840px] rounded-lg flex shadow-md bg-[#FFFFFF]">
        <div className="w-[600px] h-full flex items-center justify-center">
          <img
            src={Logo}
            alt="사진"
          />
        </div>
        <div className="w-[580px] h-full py-20 pl-[100px] pr-[120px] flex flex-col gap-9">
          <LoginTextcontainer />
          <LoginFormContainer />
          <LoginBtnContainer kakaoLogin={kakaoLogin} />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
