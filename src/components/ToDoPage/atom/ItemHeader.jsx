const ItemHeader = () => {
  return (
    <div className="w-[932px] h-[33px] px-4 bg-primary-400 rounded-lg flex items-center text-caption text-neutrals-40">
      <div className="w-[37px] h-full flex justify-center items-center">
        번호
      </div>
      <div className="w-[246px] h-full flex justify-center items-center">
        제목
      </div>
      <div className="w-[80px] h-full flex justify-center items-center">
        상태
      </div>
      <div className="w-[217px] h-full flex justify-center items-center">
        기한
      </div>
      <div className="w-[120px] h-full flex justify-center items-center">
        관리자
      </div>
      <div className="w-[120px] h-full flex justify-center items-center">
        참여인원
      </div>
      <div className="w-[80px] h-full flex justify-center items-center">
        자세히
      </div>
    </div>
  )
}

export default ItemHeader
