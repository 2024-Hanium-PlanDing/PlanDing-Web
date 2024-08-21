import { useDispatch, useSelector } from 'react-redux'
import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import ToDoContainer from '../components/ToDoPage/ToDoContainer'
import useFavorite from '../hooks/useFavorite'

const ToDoPage = () => {
  const groupInfo = useSelector(state => state.group.groupInfo)
  const dispatch = useDispatch()
  const userInfo = useSelector(state => state.user)
  const { favoriteToggle } = useFavorite(groupInfo, dispatch, userInfo)

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div className="flex gap-2.5">
        <InformationContainer />
        <ToDoContainer
          favoriteToggle={favoriteToggle}
          groupInfo={groupInfo}
        />
        <FavoritesContainer />
      </div>
    </div>
  )
}

export default ToDoPage