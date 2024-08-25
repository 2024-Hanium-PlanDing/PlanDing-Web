import { useEffect, useState } from 'react'
import AlarmItem from './atom/AlarmItem'
import {
  acceptInvitation,
  declineInvitation,
  getInvitation
} from '../../../services/Group/inviteController'
import { useDispatch, useSelector } from 'react-redux'
import AlarmInvite from './atom/AlarmInvite'
import { setGroupList } from '../../../services/Group/groupController'

const AlarmModal = () => {
  const [selectedTab, setSelectedTab] = useState('초대')
  const dispatch = useDispatch()

  const userInfo = useSelector(state => state.user)
  const invitation = useSelector(state => state.invitation.invitation)

  useEffect(() => {
    dispatch(getInvitation(userInfo.token))
  }, [userInfo.token])

  const acceptHandler = async (groupCode, inviteCode) => {
    await dispatch(acceptInvitation(userInfo.token, groupCode, inviteCode))
    await dispatch(setGroupList(userInfo.token))
  }
  const declineHandler = async inviteCode => {
    await dispatch(declineInvitation(userInfo.token, inviteCode))
  }
  const renderAlarmItems = () => {
    switch (selectedTab) {
      case '초대':
        return (
          <>
            {invitation?.data?.length > 0 ? (
              invitation.data.map((data, index) => (
                <AlarmInvite
                  data={data}
                  key={index}
                  acceptHandler={acceptHandler}
                  declineHandler={declineHandler}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 mt-4">
                초대 알림이 없습니다.
              </p>
            )}
          </>
        )
      case '스케줄':
        return (
          <>
            <p className="text-center text-gray-500 mt-4">
              스케줄 알림이 없습니다.
            </p>
          </>
        )
      case '그룹':
        return (
          <>
            <AlarmItem content="그룹 알림 1" />
            <AlarmItem content="그룹 알림 2" />
            <AlarmItem content="그룹 알림 3" />
            <AlarmItem content="그룹 알림 4" />
          </>
        )
      default:
        return null
    }
  }
  return (
    <div className="w-[280px] h-[533px rounded-2xl shadow-lg absolute left-9 top-[144px] z-50 bg-white">
      <div className="w-full h-[60px] p-4 rounded-t-2xl">
        <p className="text-subtitle-3 text-neutrals-900">알림</p>
      </div>
      <div className="w-full h-[44px] py-3 px-4 flex gap-6 border border-t-neutrals-40 border-b-neutrals-40">
        <p
          className={`text-button cursor-pointer ${
            selectedTab === '초대' ? 'text-primary-300' : 'text-neutrals-90'
          }`}
          onClick={() => setSelectedTab('초대')}>
          초대
        </p>
        <p
          className={`text-button cursor-pointer ${
            selectedTab === '스케쥴' ? 'text-primary-300' : 'text-neutrals-90'
          }`}
          onClick={() => setSelectedTab('스케쥴')}>
          스케줄
        </p>
        <p
          className={`text-button cursor-pointer ${
            selectedTab === '그룹' ? 'text-primary-300' : 'text-neutrals-90'
          }`}
          onClick={() => setSelectedTab('그룹')}>
          그룹
        </p>
      </div>
      <div className="w-full h-[388px]">
        {renderAlarmItems()} {/* 선택된 탭에 따라 다른 AlarmItem 렌더링 */}
      </div>
    </div>
  )
}

export default AlarmModal
