const RadioButton = ({ id, name, value, label }) => {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        className="hidden peer"
      />
      <span className="w-[80px] h-[33px] flex justify-center items-center  text-caption text-neutrals-80 border border-gray-300 rounded-md peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500">
        {label}
      </span>
    </label>
  )
}

export default RadioButton
