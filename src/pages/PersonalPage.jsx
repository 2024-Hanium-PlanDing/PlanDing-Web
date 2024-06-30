import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import PersonalContainer from '../components/PersonalPage/PersonalContainer'

const PersonalPage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div className="flex gap-2.5">
        <FavoritesContainer />
        <PersonalContainer />
        <InformationContainer />
      </div>
    </div>
  )
}

export default PersonalPage
