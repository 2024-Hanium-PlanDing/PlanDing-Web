import Accept from '../../../../assets/accept.svg'
import Decline from '../../../../assets/decline.svg'

const AlarmSelectBtn = ({ type, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-[120px] h-[29px] flex justify-center items-center gap-1 border rounded text-caption text-neutrals-700 ${type === '수락하기' ? 'border-success-200' : 'border-danger-200'}`}>
      <img
        src={type === '수락하기' ? Accept : Decline}
        alt={type}
      />
      <p>{type}</p>
    </button>
  )
}

export default AlarmSelectBtn
