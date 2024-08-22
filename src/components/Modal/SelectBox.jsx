const SelectBox = ({ handleSubmit, closeModalHandle, text }) => {
  return (
    <div className="flex gap-2.5 justify-end">
      <button
        onClick={handleSubmit}
        className="w-[105px] h-[34px] bg-primary-300 rounded-lg text-white flex justify-center items-center text-button">
        {text}
      </button>
      <button
        className="w-[65px] h-[34px] bg-white border border-primary-100 rounded-lg text-primary-200 text-button"
        onClick={closeModalHandle}>
        취소
      </button>
    </div>
  )
}

export default SelectBox
