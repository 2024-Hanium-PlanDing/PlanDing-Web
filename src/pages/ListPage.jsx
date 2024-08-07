import FavoritesContainer from '../components/ListPage/Favorites/FavoritesContainer'
import InformationContainer from '../components/ListPage/Information/InformationContainer'
import MainContentContainer from '../components/ListPage/MainContent/MainContentContainer'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../redux/modules/modalReducer'
import { useEffect } from 'react'
import { setGroupList } from '../services/Group/groupController'
import { getFavoriteList } from '../services/Favorite/favoriteController'

import { EventSourcePolyfill } from 'event-source-polyfill'

export const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL

const ListPage = () => {
  const userInfo = useSelector(state => state.user)
  const dispatch = useDispatch()
  const groupData = useSelector(state => state.group.groups)
  const openModalHandle = () => {
    dispatch(openModal())
  }
  useEffect(() => {
    dispatch(setGroupList(userInfo.token))
    dispatch(getFavoriteList(userInfo.token))
  }, [dispatch, userInfo.token])

  useEffect(() => {
    if (!userInfo.token) {
      console.error('No user token found')
      return
    }

    const sseUrl = `${VITE_SERVER_URL}/api/v1/notification/connect`

    const sse = new EventSourcePolyfill(sseUrl, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
        Accept: 'text/event-stream'
      },
      withCredentials: true
    })

    // 연결 열림 이벤트
    sse.onopen = () => {
      console.log('Connection to server opened.')
    }

    // 메시지 수신 이벤트
    sse.onmessage = e => {
      console.log(JSON.parse(e.data))
    }

    // 오류 발생 이벤트
    sse.onerror = e => {
      console.error('EventSource error:', e)
    }

    // 컴포넌트 언마운트 시 SSE 연결 닫기
    return () => {
      if (sse) {
        sse.close()
      }
    }
  }, [userInfo.token])

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#F6F6F6]">
      <div className="flex gap-2.5">
        <FavoritesContainer />
        <MainContentContainer
          openModal={openModalHandle}
          groupData={groupData?.data}
        />
        <InformationContainer />
      </div>
    </div>
  )
}

export default ListPage
