import { useLocation, useNavigate } from 'react-router-dom'
import Progress from '../components/LoginProgressPage/Progress'
import { useEffect } from 'react'

const LoginProgressPage = () => {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('accessToken')
    if (token) {
      handleLogin(token)
    }
  })
  const handleLogin = token => {
    try {
      console.log(token)
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
