const CreateGroupText = ({ title, setTitle, description, setDescription }) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-4 text-body text-neutrals-600">그룹 이름</p>
        <input
          placeholder="이름을 지어주세요"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="border border-neutrals-80 rounded-sm w-[392px] h-[40px] p-2.5"
        />
      </div>
      <div>
        <p className="mb-4 text-body text-neutrals-600">그룹 설명</p>
        <input
          placeholder="설명을 적어주세요"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="border border-neutrals-80 rounded-sm w-[392px] h-[80px] p-2.5"
        />
      </div>
    </div>
  )
}

export default CreateGroupText
