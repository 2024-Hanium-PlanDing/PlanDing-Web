import SelectBox from '../SelectBox'
import PeopleItem from './atom/PeopleItem'

const PeopleSettings = ({
  closeModalHandle,
  userData,
  onSelectUser,
  selectedUsers,
  createTodo
}) => {
  return (
    <div className="w-full h-[434px] flex flex-col gap-2.5">
      <p className="text-body text-neutrals-600">인원 설정</p>
      <div className="w-full h-[60px] flex items-center border-y border-neutrals-40 relative">
        {selectedUsers?.map((data, index) => (
          <img
            src={data.profileImageUrl}
            className={`w-[28px] h-[28px] rounded-full ${
              index !== 0 ? '-ml-2' : ''
            }`}
            alt="선택된 유저"
            key={index}
          />
        ))}
        <p className="text-button text-neutrals-600 absolute right-2">
          {`총 ${selectedUsers.length}명`}
        </p>
      </div>
      <div className="w-full h-[282px]">
        {userData.map((data, index) => (
          <PeopleItem
            data={data}
            key={index}
            onSelectUser={onSelectUser}
          />
        ))}
      </div>

      <SelectBox
        text="일정 만들기"
        handleSubmit={createTodo}
        closeModalHandle={closeModalHandle}
      />
    </div>
  )
}

export default PeopleSettings
