import Item from './atom/Item'

const ItemContainer = ({ openModal, groupData }) => {
  console.log(groupData)
  return (
    <div className="w-full min-h-[222px] max-h-[354px] py-5 px-4 grid grid-cols-4 gap-4 border border-black overflow-y-scroll">
      <Item onClick={openModal} />
      {groupData?.map((data, index) => (
        <Item
          key={index}
          data={data}
        />
      ))}
    </div>
  )
}

export default ItemContainer
