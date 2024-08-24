import ToDoItem from './atom/ToDoItem'
import SlideUp from '../../assets/slideUp.svg'

const TodoParent = () => {
  return (
    <div className="ml-4">
      <div className="w-full h-[33px] flex gap-2 text-caption text-neutrals-900 items-center">
        <button className="w-4 h-4 flex justify-center items-center">
          <img
            src={SlideUp}
            alt="슬라이드"
          />
        </button>
        <div className="w-[240px] h-full flex  items-center">제목</div>
        <div className="w-[60px] h-full flex justify-center items-center">
          5개
        </div>
        <div className="w-[160px] h-full flex justify-center items-center">
          2024년 8월 10일
        </div>
        <div className="w-[160px] h-full flex justify-center items-center">
          2024년 8월 18일
        </div>
      </div>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  )
}

export default TodoParent
