import MainTitle from '../ListPage/MainContent/atom/MainTitle'
import ScheduleContainer from '../PersonalPage/Schedule/ScheduleContainer'
import AddPerson from '../../assets/addPerson.svg'
import ScheduleDetail from '../PersonalPage/Schedule/ScheduleDetail'
import { useState } from 'react'

const GroupContainer = ({
  weekData,
  scheduleList,
  groupInfo,
  favoriteToggle,
  deleteSchedule,
  openInviteModal,
  token
}) => {
  const [year, month] = weekData?.startDate
    ? weekData.startDate.split('-')
    : [undefined, undefined]
  const formattedDate = `${year}년 ${parseInt(month)}월`
  const [selectData, SetSelectData] = useState()

  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 bg-white ">
      <div className="w-[972px] h-full flex flex-col gap-8 border-2 rounded-lg border-neutrals-40 relative">
        <div>
          <MainTitle
            text={groupInfo?.name}
            favoriteToggle={favoriteToggle}
            favoriteState={groupInfo?.isFavorite}
          />
        </div>
        <div className="w-[900px] flex justify-between mx-5">
          <p className="text-subtitle-1 text-primary-500">{formattedDate}</p>
          <button
            type="button"
            className="w-[117px] h-[40px] flex justify-center items-center gap-3 bg-primary-50 rounded-lg"
            onClick={openInviteModal}>
            <img
              src={AddPerson}
              alt="친구추가"
            />
            <p className="text-button text-primary-400">Invite</p>
          </button>
        </div>

        <div className="flex-grow p-2 overflow-y-scroll">
          <ScheduleContainer
            weekData={weekData}
            scheduleList={scheduleList}
            SetSelectData={SetSelectData}
          />
        </div>
        <ScheduleDetail
          selectData={selectData}
          groupCode={groupInfo.groupCode}
          token={token}
          deleteSchedule={deleteSchedule}
        />
      </div>
    </div>
  )
}

export default GroupContainer
