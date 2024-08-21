const ToDoItem = () => {
  return (
    <div className="w-[932px] h-[42px] px-4 flex items-center text-caption text-neutrals-900">
      <div className="w-[37px] h-full flex justify-center items-center">1</div>
      <div className="w-[246px] h-full flex justify-center items-center">
        일정 제목
      </div>
      <div className="w-[80px] h-full flex justify-center items-center">
        진행중
      </div>
      <div className="w-[217px] h-full flex justify-center items-center">
        2024년 8월 18일 00시 까지
      </div>
      <div className="w-[120px] h-full flex justify-center items-center">
        관리자 이름
      </div>
      <div className="w-[120px] h-full flex justify-center items-center">
        참여인원
      </div>
      <div className="w-[80px] h-full flex justify-center items-center">
        상세보기
      </div>
    </div>
  )
}

export default ToDoItem
