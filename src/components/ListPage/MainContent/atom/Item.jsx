import Default from '../../../../assets/default.svg'
import Delete from '../../../../assets/delete.svg'
import Leave from '../../../../assets/leave.svg'
import Plus from '../../../../assets/plusBlack.svg'

const Item = ({ onClick, data, text, userInfo, removeGroupHandler }) => {
  const isOwner = userInfo?.user.userInfo.userCode === data?.ownerCode

  return (
    <div className="w-[223px] h-[178px] p-3 border border-[#E8E9FA] rounded-sm shadow-lg">
      {text ? (
        <div className="w-[199px] h-[120px]  rounded-sm bg-neutrals-30 flex justify-center items-center">
          <img
            src={Plus}
            alt="그룹 생성"
          />
        </div>
      ) : (
        <div className="relative  ">
          <img
            src={data?.thumbnailPath ?? Default}
            className="w-[199px] h-[120px] rounded-sm"
          />
          <img
            src={isOwner ? Delete : Leave}
            className="absolute top-1 right-1 cursor-pointer"
            onClick={() => removeGroupHandler(isOwner, data.code)}
          />
        </div>
      )}

      <p
        className={`mt-3 ml-1 text-caption 'text-neutrals-800' cursor-pointer`}
        onClick={onClick}>
        {data?.name ?? text}
      </p>
    </div>
  )
}

export default Item
