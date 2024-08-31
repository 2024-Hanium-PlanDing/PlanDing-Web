import ToDoItem from './atom/ToDoItem'
import SlideUp from '../../assets/slideUp.svg'
import SlideDown from '../../assets/slideDown.svg'
import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './TodoParent.css'

const TodoParent = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false) // 상태를 추가하여 슬라이드 상태 관리

  // 시작일과 종료일 계산
  const getStartAndEndDate = planners => {
    if (!planners || planners.length === 0)
      return { startDate: null, endDate: null }

    const dates = planners.map(item => new Date(item.deadline))
    const startDate = new Date(Math.min(...dates))
    const endDate = new Date(Math.max(...dates))

    return {
      startDate: `${startDate.getFullYear()}년 ${startDate.getMonth() + 1}월 ${startDate.getDate()}일`,
      endDate: `${endDate.getFullYear()}년 ${endDate.getMonth() + 1}월 ${endDate.getDate()}일`
    }
  }

  const { startDate, endDate } = getStartAndEndDate(data.planners)
  const toggleOpen = () => {
    setIsOpen(prv => !prv)
  }

  return (
    <div className="ml-4">
      <div className="w-full h-[33px] flex gap-2 text-caption text-neutrals-900 items-center">
        <button
          className="w-4 h-4 flex justify-center items-center"
          onClick={toggleOpen}>
          <img
            src={isOpen ? SlideUp : SlideDown}
            alt="슬라이드"
          />
        </button>
        <div className="w-[240px] h-full flex  items-center">
          {data.scheduleTitle}
        </div>
        <div className="w-[60px] h-full flex justify-center items-center">
          {data.planners.length}개
        </div>
        <div className="w-[160px] h-full flex justify-center items-center">
          {startDate}
        </div>
        <div className="w-[160px] h-full flex justify-center items-center">
          {endDate}
        </div>
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames="slide"
        unmountOnExit>
        <div>
          {data?.planners.map((data, index) => (
            <ToDoItem
              data={data}
              key={index}
            />
          ))}
        </div>
      </CSSTransition>
    </div>
  )
}

export default TodoParent
