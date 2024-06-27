import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import MainContentContainer from '../components/ListPage/MainContent/MainContentContainer'

const ListPage = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen ">
      <div className="flex gap-2.5">
        <FavoritesContainer />
        <MainContentContainer />
        <InformationContainer />
      </div>
    </div>
  )
}

export default ListPage
