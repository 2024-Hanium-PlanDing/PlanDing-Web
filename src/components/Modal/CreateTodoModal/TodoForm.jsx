import DateSelect from './atom/DateSelect'
import RadioButton from './atom/RadioButton'
import SelectTodo from './SelectTodo'

const TodoForm = ({ scheduleList, onChangeData, onChangeDate }) => {
  return (
    <from className="w-[392px] h-[434px] flex flex-col gap-6">
      <div>
        <label className="text-body text-neutral-600 mb-3 flex flex-col">
          스케줄 선택
        </label>
        <SelectTodo
          scheduleList={scheduleList}
          onChangeData={onChangeData}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-body text-neutral-600 mb-3">일정 이름</label>
        <input
          type="text"
          placeholder="이름을 지어주세요"
          name="title"
          onChange={onChangeData}
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
            name="status"
            value="TODO"
            label="진행중"
            onChange={onChangeData}
          />
          <RadioButton
            id="completed"
            name="status"
            value="DONE"
            label="완료"
            onChange={onChangeData}
          />
          <RadioButton
            id="pending"
            name="status"
            value="IN_PROGRESS"
            label="진행대기"
            onChange={onChangeData}
          />
        </div>
      </div>
      <div>
        <label className="text-body text-neutral-600 mb-3">마감 기한</label>
        <DateSelect
          onChangeDate={onChangeDate}
          onChangeData={onChangeData}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-body text-neutral-600 mb-3">
          일정 상세 설명
        </label>
        <textarea
          className="w-[392px] h-[100px] border border-neutrals-80 rounded-lg resize-none p-2.5 text-button"
          placeholder="설명을 적어주세요"
          name="content"
          onChange={onChangeData}
        />
      </div>
    </from>
  )
}
export default TodoForm
