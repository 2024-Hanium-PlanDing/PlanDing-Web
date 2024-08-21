import MainTitle from '../ListPage/MainContent/atom/MainTitle'

const ToDoContainer = ({ favoriteToggle, groupInfo }) => {
  return (
    <div className="w-[1012px] h-[848px] rounded-lg shadow-md p-5 bg-white">
      <div className="w-[972px] h-full flex flex-col gap-8 border-2 rounded-t-md border-neutrals-40">
        <div>
          <MainTitle
            text={groupInfo?.name}
            favoriteToggle={favoriteToggle}
            favoriteState={groupInfo?.isFavorite}
          />
        </div>
      </div>
    </div>
  )
}
export default ToDoContainer
