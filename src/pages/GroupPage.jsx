import { useParams } from 'react-router-dom'

const GroupPage = () => {
  const { code } = useParams()
  console.log(code)
  return <p>GroupPage</p>
}

export default GroupPage
ㅂ
