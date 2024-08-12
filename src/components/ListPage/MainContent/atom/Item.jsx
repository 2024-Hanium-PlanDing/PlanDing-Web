import Default from '../../../../assets/default.svg'

const Item = ({ onClick, data }) => {
  return (
    <div
      className="w-[223px] h-[178px] p-3 border border-black rounded-sm"
      onClick={onClick}>
      <img
        src={data?.thumbnailPath ?? Default}
        className="w-[199px] h-[120px] border border-black rounded-sm"></img>
      <p className="mt-3 ml-1 text-body text-neutrals-800">{data?.name}</p>
    </div>
  )
}

export default Item
