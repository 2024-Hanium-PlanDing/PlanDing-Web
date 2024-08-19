import { useState } from 'react'
import AlarmItem from './atom/AlarmItem'

const AlarmModal = () => {
  const [selectedTab, setSelectedTab] = useState('초대') // 기본적으로 '초대' 탭이 선택됨
  const renderAlarmItems = () => {
    switch (selectedTab) {
      case '초대':
        return (
          <>
            <AlarmItem content="초대 알림 1" />
            <AlarmItem content="초대 알림 2" />
            <AlarmItem content="초대 알림 3" />
          </>
        )
      case '스케쥴':
        return (
          <>
            <AlarmItem content="스케쥴 알림 1" />
            <AlarmItem content="스케쥴 알림 2" />
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
    <div className="w-[280px] h-[533px] border border-black rounded-2xl shadow-lg absolute left-9 top-[144px] z-50 bg-white">
      <div className="w-full h-[60px] p-4 rounded-t-2xl">
        <p className="text-subtitle-3 text-neutrals-900">알림</p>
      </div>
      <div className="w-full h-[44px] py-3 px-4 flex gap-6 border shadow-md border-t-neutrals-40 border-b-neutrals-40">
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
          스케쥴
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
