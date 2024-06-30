import { useNavigate } from 'react-router-dom'
import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import MainContentContainer from '../components/ListPage/MainContent/MainContentContainer'

const ListPage = () => {
  const nav = useNavigate()
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div
        className="flex gap-2.5"
        onClick={() => {
          nav(`/personal`)
        }}>
        <FavoritesContainer />
        <MainContentContainer />
        <InformationContainer />
      </div>
    </div>
  )
}

export default ListPage
