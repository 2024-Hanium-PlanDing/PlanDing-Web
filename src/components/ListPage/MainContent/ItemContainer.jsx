import Item from './atom/Item'

const ItemContainer = ({ openModal }) => {
  return (
    <div className="w-full min-h-[222px] max-h-[354px] py-5 px-4 grid grid-cols-4 gap-4 border border-black overflow-y-scroll">
      <Item onClick={openModal} />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  )
}

export default ItemContainer
