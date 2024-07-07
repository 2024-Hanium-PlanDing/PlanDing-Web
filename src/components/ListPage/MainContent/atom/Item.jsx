const Item = ({ onClick }) => {
  return (
    <div
      className="w-[223px] h-[178px] p-3 border border-black rounded-sm"
      onClick={onClick}>
      <div className="w-[199px] h-[120px] border border-black rounded-sm"></div>
    </div>
  )
}

export default Item
