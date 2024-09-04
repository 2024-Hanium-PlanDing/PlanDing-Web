const ScheduleDetail = () => {
  return (
    <div className="w-[320px] h-[413px] rounded-2xl bg-white absolute bottom-0 right-0 p-5">
      <div className="w-full h-full p-5 border-2 border-neutrals-50 rounded-lg flex flex-col gap-4">
        <div className="w-full h-[41px] p-3 border-b-2 border-b-neutrals-40  text-caption text-neutrals-900">
          제목
        </div>
        <div className="w-full h-[120px] p-3 border-b-2 border-b-neutrals-40 text-caption text-neutrals-900">
          내용
        </div>
        <div className="w-full h-[36px] text-caption text-neutrals-900 flex gap-4">
          <div className="flex items-center">
            <div className="w-[80px] h-[36px] flex justify-center items-center text-button border-b-2 border-b-neutrals-40">
              06시
            </div>
            <p className="ml-2">부터</p>
          </div>
          <div className="flex items-center">
            <div className="w-[80px] h-[36px] flex justify-center items-center text-button border-b-2 border-b-neutrals-40">
              06시
            </div>
            <p className="ml-2">부터</p>
          </div>
        </div>
        <div className="w-full h-[36px] flex justify-center items-center border-b-2 border-b-neutrals-40 text-caption text-neutrals-900">
          내용
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            className="w-[114px] h-[36px] bg-neutrals-20 text-button text-primary-500 rounded">
            수정하기
          </button>
          <button
            type="button"
            className="w-[114px] h-[36px] bg-neutrals-20 text-button text-danger-300 rounded">
            삭제하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScheduleDetail
