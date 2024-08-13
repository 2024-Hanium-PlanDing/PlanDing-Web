import ThumbnailSvg from '../../../../assets/thumbnail.svg'

const CreateGroupThumbnail = ({ setFile }) => {
  return (
    <div className="w-full">
      <p className="text-neutrals-600 text-body mb-4">썸네일 선택</p>
      <label
        htmlFor="thumbnail"
        className="flex items-end cursor-pointer">
        <img
          src={ThumbnailSvg}
          alt="썸네일 선택"
          className="w-[194px] h-[124px] object-cover text-gray-400 group-hover:text-gray-600"
        />
        <input
          id="thumbnail"
          type="file"
          onChange={e => setFile(e.target.files[0])}
          className="hidden"
        />
        <p className="ml-2.5 text-caption text-gray-400 group-hover:text-gray-600">
          썸네일로 지정할 이미지를 선택해주세요
        </p>
      </label>
    </div>
  )
}

export default CreateGroupThumbnail
