import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import MainContentContainer from '../components/ListPage/MainContent/MainContentContainer'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../redux/modules/modalReducer'

const ListPage = () => {
  const userInfo = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const openModalHandle = () => {
    dispatch(openModal())
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div className="flex gap-2.5">
        <FavoritesContainer />
        <MainContentContainer openModal={openModalHandle} />
        <InformationContainer userInfo={userInfo} />
      </div>
    </div>
  )
}

export default ListPage
