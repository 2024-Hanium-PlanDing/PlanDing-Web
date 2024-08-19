import Default from '../../../../assets/default.svg'

const Item = ({ onClick, data, text }) => {
  return (
    <div
      className="w-[223px] h-[178px] p-3 border border-[#E8E9FA] rounded-sm shadow-lg"
      onClick={onClick}>
      {text ? (
        <div className="w-[199px] h-[120px]  rounded-sm bg-[#B2B7FF]" />
      ) : (
        <img
          src={data?.thumbnailPath ?? Default}
          className="w-[199px] h-[120px] rounded-sm"
        />
      )}

      <p
        className={`mt-3 ml-1 text-caption ${data?.name ? 'text-neutrals-800' : 'text-[#363BC9]'} `}>
        {data?.name ?? text}
      </p>
    </div>
  )
}

export default Item
