const Item = ({ onClick, data }) => {
  return (
    <div
      className="w-[223px] h-[178px] p-3 border border-black rounded-sm"
      onClick={onClick}>
      <img
        src={data?.thumbnailPath}
        className="w-[199px] h-[120px] border border-black rounded-sm"></img>
    </div>
  )
}

export default Item
