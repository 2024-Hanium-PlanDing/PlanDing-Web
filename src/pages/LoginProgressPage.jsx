import { useLocation, useNavigate } from 'react-router-dom'
import Progress from '../components/LoginProgressPage/Progress'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UserInfo, UserToken } from '../services/User/userController'

const LoginProgressPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('temporary')

    if (token) {
      handleLogin(token)
    }
  }, [location.search])
  const handleLogin = async token => {
    try {
      await dispatch(UserToken(token))
      await dispatch(UserInfo())
      navigate('/list')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F5F5FD]">
      <Progress />
    </div>
  )
}

export default LoginProgressPage
