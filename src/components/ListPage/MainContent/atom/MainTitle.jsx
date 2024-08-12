const MainTitle = ({ text }) => {
  return (
    <div className="w-full h-[80px] rounded-t-md font-bold text-[32px] flex items-center pl-4 bg-primary-200 text-neutrals-0">
      {text ?? 'Planding'}
    </div>
  )
}
export default MainTitle
