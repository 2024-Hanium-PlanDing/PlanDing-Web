import SelectBox from '../SelectBox'

const PeopleSettings = ({ closeModalHandle }) => {
  return (
    <div className="w-[392px] h-[434px]">
      <p className="text-body text-neutrals-600">인원 설정</p>

      <SelectBox
        text="일정 만들기"
        closeModalHandle={closeModalHandle}
      />
    </div>
  )
}

export default PeopleSettings
