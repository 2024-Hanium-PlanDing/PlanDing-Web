import { useNavigate } from 'react-router-dom'
import Item from './atom/Item'

const ItemContainer = ({ onClick, groupData }) => {
  const nav = useNavigate()
  return (
    <div className="w-full min-h-[222px] max-h-[354px] py-5 px-4 grid grid-cols-4 gap-4 border border-black overflow-y-scroll">
      <Item onClick={onClick} />
      {groupData?.map((data, index) => (
        <Item
          key={index}
          data={data}
          onClick={() => {
            nav(`/group/${data.code}`)
          }}
        />
      ))}
    </div>
  )
}

export default ItemContainer
