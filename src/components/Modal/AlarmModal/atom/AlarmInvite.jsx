import AlarmSelectBtn from './AlarmSelectBtn'

const AlarmInvite = ({ data }) => {
  return (
    <div className="w-[280px] h-[143px] px-4 py-5 flex flex-col gap-4 border-y border-neutrals-40">
      <div className="w-[248px] h-[58px] flex">
        <div>
          <img
            src={data.groupResponse.thumbnailPath}
            className="w-[28px] h-[28px] rounded-full"
          />
        </div>
        <div className="ml-2 flex flex-col gap-1">
          <p className="text-caption text-neutrals-700 font-bold">그룹 초대</p>
          <p className="text-caption text-neutrals-400">
            <strong>{data.userName}</strong>님께서 당신을
            <strong>{data.groupName}</strong>에 초대하고 싶어합니다!
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <AlarmSelectBtn type="수락하기" />
        <AlarmSelectBtn type="거절하기" />
      </div>
    </div>
  )
}
export default AlarmInvite
