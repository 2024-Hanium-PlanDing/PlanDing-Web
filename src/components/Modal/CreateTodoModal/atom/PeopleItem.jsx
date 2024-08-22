import { useState } from 'react'

const PeopleItem = ({ data, onSelectUser }) => {
  const [isSelected, setIsSelected] = useState(false)

  const handleButtonClick = () => {
    setIsSelected(!isSelected)
    onSelectUser(data)
  }

  return (
    <div className="w-[392px] h-[58px] flex items-center justify-between ">
      <div className="flex gap-4">
        <img
          src={data.profileImageUrl}
          alt="프로필"
          className="w-[28px] h-[28px] rounded-full"
        />
        <div>
          <p className="text-caption text-neutrals-700">{data.userName}</p>
          <p className="text-overline text-neutrals-100">{data.userCode}</p>
        </div>
      </div>
      <div>
        <button
          onClick={handleButtonClick}
          className={`w-[64px] h-[33px] text-caption border rounded-lg ${
            isSelected
              ? 'border-success-300 text-success-300'
              : 'border-neutrals-80 text-neutrals-80'
          }`}>
          {isSelected ? '추가됨' : '추가'}
        </button>
      </div>
    </div>
  )
}

export default PeopleItem
