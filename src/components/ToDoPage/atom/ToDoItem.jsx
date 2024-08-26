import EditBtn from '../../../assets/editBtn.svg'

const ToDoItem = ({ data }) => {
  const formatDeadline = deadline => {
    const date = new Date(deadline)
    const month = date.getMonth() + 1 // 월은 0부터 시작하므로 +1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return `${month}월 ${day}일 ${hours}시 ${minutes > 0 ? `${minutes}분` : ''}까지`
  }
  return (
    <div className="w-[904px] h-[41px] px-6 py-1 gap-1 border-y border-y-neutrals-40 flex items-center text-caption text-neutrals-900 bg-neutrals-20">
      <div className="w-[472px] h-full flex  items-center">{data?.title}</div>
      <div className="w-[78px] h-full flex gap-1 justify-center items-center">
        <img
          src={data?.manager.profileImage}
          alt="프로필사진"
          className="w-4 h-4 rounded-full"
        />
        {data?.manager.username}
      </div>

      <div className="w-[71px] h-full flex justify-center items-center gap-1">
        {data.users.map((data, index) => (
          <img
            src={data.profileImage}
            key={index}
            className={`w-4 h-4 rounded-full ${index !== 0 ? '-ml-2.5' : ''}`}
          />
        ))}
        +{data.users.length}
      </div>
      <div className="w-[80px] h-full flex justify-center items-center gap-1">
        <div
          className={`w-2 h-2 rounded-full ${
            data.status === 'IN_PROGRESS'
              ? 'bg-warning-200'
              : data.status === 'DONE'
                ? 'bg-success-200'
                : 'bg-danger-300'
          }`}
        />
        {data.status === 'IN_PROGRESS'
          ? '진행중'
          : data.status === 'DONE'
            ? '완료'
            : '진행대기'}
      </div>
      <div className="w-[111px] h-full flex justify-center items-center">
        {formatDeadline(data.deadline)}
      </div>
      <button className="w-6 h-6 ml-2">
        <img
          src={EditBtn}
          alt="추가 기능"
        />
      </button>
    </div>
  )
}

export default ToDoItem
