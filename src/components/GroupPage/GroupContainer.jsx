import MainTitle from '../ListPage/MainContent/atom/MainTitle'
import ScheduleContainer from '../PersonalPage/Schedule/ScheduleContainer'
import AddPerson from '../../assets/addPerson.svg'

const GroupContainer = ({
  weekData,
  scheduleList,
  groupInfo,
  favoriteToggle,
  deleteSchedule,
  inviteHandle
}) => {
  const [year, month] = weekData.startDate.split('-')
  const formattedDate = `${year}년 ${parseInt(month)}월`

  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 bg-white">
      <div className="w-[972px] h-full flex flex-col gap-8 border-2 rounded-t-md border-neutrals-40">
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
            onClick={inviteHandle}>
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
            deleteSchedule={deleteSchedule}
          />
        </div>
      </div>
    </div>
  )
}

export default GroupContainer
