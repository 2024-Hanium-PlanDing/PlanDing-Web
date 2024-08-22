import { useSelector } from 'react-redux'
import TodoForm from './TodoForm'

const CreateTodoModal = () => {
  const modalState = useSelector(state => state.modal.createTodoModal)
  if (modalState) {
    return null
  }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
      <div className="w-[864px] h-[591px] bg-[#FFFFFF] rounded-md p-2">
        <div className="w-full h-full border border-primary-100 rounded-md p-5">
          <div className="w-full h-[77px] border-b border-b-neutrals-60">
            <p className="text-subtitle-2 text-primary-500">일정 생성하기</p>
            <p className="text-caption text-neutrals-400 mt-2.5">
              생성할 그룹의 정보를 입력해 주세요
            </p>
          </div>
          <div className="flex mt-6">
            <TodoForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateTodoModal
