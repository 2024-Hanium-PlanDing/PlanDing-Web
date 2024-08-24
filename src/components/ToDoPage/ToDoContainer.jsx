import MainTitle from '../ListPage/MainContent/atom/MainTitle'
import SubTitle from '../ListPage/MainContent/atom/SubTitle'
import Plus from '../../assets/plus.svg'

import ItemHeader from './atom/ItemHeader'
import TodoParent from './TodoParent'

const ToDoContainer = ({ favoriteToggle, groupInfo, createTodoHandler }) => {
  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 bg-white">
      <div className="w-[972px] h-full flex flex-col gap-8 border-2 rounded-t-md border-neutrals-40">
        <div>
          <MainTitle
            favoriteToggle={favoriteToggle}
            favoriteState={groupInfo?.data.isFavorite}
          />
          <SubTitle text={`${groupInfo?.data.name} 일정표`} />
          <div className="mt-5 mb-4 mx-5 flex justify-between items-center">
            <p className="text-subtitle-3 text-[#303494]">일정 목록</p>
            <button
              type="button"
              onClick={createTodoHandler}
              className="w-[109px] h-[40px] flex justify-center items-center gap-1 bg-primary-50 rounded-lg cursor-pointer">
              <img
                src={Plus}
                alt="친구추가"
              />
              <p className="text-button text-primary-400">추가하기</p>
            </button>
          </div>
          <div className="w-[932px] h-[579px] mx-5">
            <ItemHeader />
            <div className="flex flex-col gap-2">
              <TodoParent />
              <TodoParent />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ToDoContainer
