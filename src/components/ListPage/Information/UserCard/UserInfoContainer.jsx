import { useSelector } from 'react-redux'
import LogoutBtn from './atom/LogoutBtn'
import AlarmSvg1 from '../../../../assets/defaultAlarm.svg'
import AlarmSvg2 from '../../../../assets/changeAlarm.svg'

import MessageSvg from '../../../../assets/defaultMessage.svg'

const UserInfoContainer = ({ setAlarmModal, alarmState, setAlarmState }) => {
  const userInfo = useSelector(state => state.user.user)

  return (
    <div className="rounded-md w-[280px] h-[136px] bg-neutrals-20 py-5 px-4">
      <div className="flex items-center justify-between">
        <div className="flex">
          <img
            src={userInfo.userInfo?.profileImage}
            alt="유저 프로필"
            className="w-[40px] h-[40px] rounded-full"
          />
          <div className="flex flex-col ml-2">
            <p className="text-neutrals-600 text-body">
              {userInfo.userInfo?.username}
            </p>
            <p className="text-neutrals-600 text-caption">
              {userInfo.userInfo?.userCode}
            </p>
          </div>
        </div>

        <LogoutBtn />
      </div>
      <div className="flex gap-2.5 mt-5">
        <img
          src={alarmState ? AlarmSvg2 : AlarmSvg1}
          alt="알람"
          onClick={() => {
            setAlarmModal(prv => !prv)
            setAlarmState(false)
          }}
        />
        <img
          src={MessageSvg}
          alt="메시지"
        />
      </div>
    </div>
  )
}

export default UserInfoContainer
