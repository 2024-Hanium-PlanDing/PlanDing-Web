const RadioButton = ({ id, name, value, label, onChange }) => {
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        className="hidden peer"
        onChange={onChange}
      />

      <span className="w-[80px] h-[33px] flex gap-1 justify-center items-center  text-caption text-neutrals-80 border border-gray-300 rounded-md peer-checked:bg-blue-500 peer-checked:text-white peer-checked:border-blue-500">
        <div
          className={`w-2 h-2 rounded-full ${
            value === 'IN_PROGRESS'
              ? 'bg-warning-200'
              : value === 'DONE'
                ? 'bg-success-200'
                : 'bg-danger-300'
          }`}
        />
        {label}
      </span>
    </label>
  )
}

export default RadioButton
