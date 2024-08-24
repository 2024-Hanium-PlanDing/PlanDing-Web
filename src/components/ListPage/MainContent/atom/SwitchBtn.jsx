import Planner from '../../../../assets/planner.svg'
import Schedule from '../../../../assets/schedule.svg'

const SwitchBtn = ({ endPath, type, onClick }) => {
  const isPlanner = type === '플래너' && endPath === 'todo'
  const isSchedule = type === '스케줄' && endPath !== 'todo'

  return (
    <button
      onClick={onClick}
      className={`w-[97px] h-[40px] flex gap-1 items-center justify-center rounded-t-lg ${
        isPlanner || isSchedule
          ? 'bg-primary-400 text-white'
          : 'bg-neutrals-20 text-primary-400'
      }`}>
      <img
        src={type === '스케줄' ? Schedule : Planner}
        alt="스위치 버튼"
        style={{
          filter:
            isPlanner || isSchedule
              ? 'invert(100%) sepia(94%) saturate(8%) hue-rotate(255deg) brightness(107%) contrast(100%)'
              : 'invert(29%) sepia(10%) saturate(5487%) hue-rotate(207deg) brightness(96%) contrast(91%)'
        }}
      />
      <p className="text-button">{type}</p>
    </button>
  )
}

export default SwitchBtn
