import { useNavigate } from 'react-router-dom'
import Logo from '../assets/LoginLogo.svg'
import LoginBtnContainer from '../components/LoginPage/LoginBtn/LoginBtnContainer'
import LoginFormContainer from '../components/LoginPage/LoginForm/LoginFormContainer'
import LoginTextcontainer from '../components/LoginPage/LoginText/LoginTextcontainer'

const LoginPage = () => {
  const nav = useNavigate()
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="w-[1180px] h-[840px] rounded-lg flex shadow-md bg-[#FBFBFB]">
        <div className="w-[600px] h-full flex items-center justify-center">
          <img
            src={Logo}
            alt="사진"
          />
        </div>
        <div
          className="w-[580px] h-full py-20 pl-[100px] pr-[120px] flex flex-col gap-9"
          onClick={() => {
            nav(`/list`)
          }}>
          <LoginTextcontainer />
          <LoginFormContainer />
          <LoginBtnContainer />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
