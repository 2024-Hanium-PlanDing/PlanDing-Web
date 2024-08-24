import EditBtn from '../../../assets/editBtn.svg'

const ToDoItem = () => {
  return (
    <div className="w-[904px] h-[41px] px-6 py-1 gap-1 border-y border-y-neutrals-40 flex items-center text-caption text-neutrals-900 bg-neutrals-20">
      <div className="w-[472px] h-full flex  items-center">일정 제목</div>
      <div className="w-[78px] h-full flex justify-center items-center">
        관리자 이름
      </div>

      <div className="w-[71px] h-full flex justify-center items-center">
        참여인원
      </div>
      <div className="w-[80px] h-full flex justify-center items-center">
        진행중
      </div>
      <div className="w-[111px] h-full flex justify-center items-center">
        8월 16일 21 시까지
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
