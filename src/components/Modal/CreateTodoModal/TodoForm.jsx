import DateSelect from './atom/DateSelect'
import RadioButton from './atom/RadioButton'

const TodoForm = () => {
  return (
    <from className="w-[392px] h-[434px] flex flex-col gap-6">
      <div className="flex flex-col">
        <label className="text-body text-neutral-600 mb-3">일정 이름</label>
        <input
          type="text"
          placeholder="이름을 지어주세요"
          name="title"
          className="w-[392px] h-[40px] border border-neutrals-80 rounded-lg text-button text-neutrals-80 p-2.5"
        />
      </div>

      <div>
        <label className="text-body text-neutral-600 mb-3 flex flex-col">
          일정 상태
        </label>
        <div className="flex gap-3">
          <RadioButton
            id="in-progress"
            name="state"
            value="진행중"
            label="진행중"
          />
          <RadioButton
            id="completed"
            name="state"
            value="완료"
            label="완료"
          />
          <RadioButton
            id="pending"
            name="state"
            value="진행대기"
            label="진행대기"
          />
        </div>
      </div>
      <div>
        <label className="text-body text-neutral-600 mb-3">마감 기한</label>
        <DateSelect />
      </div>
      <div className="flex flex-col">
        <label className="text-body text-neutral-600 mb-3">
          일정 상세 설명
        </label>
        <textarea
          className="w-[392px] h-[120px] border border-neutrals-80 rounded-lg resize-none p-2.5 text-button"
          placeholder="설명을 적어주세요"
        />
      </div>
    </from>
  )
}
export default TodoForm
