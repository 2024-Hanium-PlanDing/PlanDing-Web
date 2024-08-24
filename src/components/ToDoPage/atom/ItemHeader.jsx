const ItemHeader = () => {
  return (
    <div className="w-[932px] h-[33px] px-4 bg-primary-400 rounded-lg flex gap-2 items-center text-caption text-neutrals-40">
      <div className="w-[240px] ml-6 h-full flex justify-center items-center">
        제목
      </div>
      <div className="w-[60px] h-full flex justify-center items-center">
        일정
      </div>
      <div className="w-[160px] h-full flex justify-center items-center">
        시작일
      </div>
      <div className="w-[160px] h-full flex justify-center items-center">
        종료일
      </div>
    </div>
  )
}

export default ItemHeader
