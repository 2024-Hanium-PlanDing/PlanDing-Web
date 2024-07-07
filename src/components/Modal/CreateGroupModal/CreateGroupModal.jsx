import { useDispatch, useSelector } from 'react-redux'
import ThumbnailSvg from '../../../assets/thumbnail.svg'
import { closeModal } from '../../../redux/modules/modalReducer'
import { useState } from 'react'
import { createGroupList } from '../../../services/Group/groupController'

const CreateGroupModal = () => {
  const dispatch = useDispatch()
  const modalState = useSelector(state => state.modal.isOpen)
  const userInfo = useSelector(state => state.user)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  if (!modalState) {
    return null
  }

  const handleSubmit = async () => {
    if (file) {
      try {
        await dispatch(
          createGroupList(userInfo.token, title, description, file)
        )
        dispatch(closeModal())
        setTitle('')
        setDescription('')
        setFile(null)
      } catch (error) {
        console.error('Failed to create group:', error)
      }
    } else {
      console.warn('No file selected')
    }
  }

  const closeModalHandle = () => {
    dispatch(closeModal())
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center z-50">
      <div className="w-[472px] h-[649px] bg-neutrals-0 rounded-lg p-10">
        <div>
          <p className="text-primary-500 text-subtitle-2">그룹 만들기</p>
          <p className="text-neutral-400 text-caption">
            생성할 그룹의 정보를 입력해 주세요
          </p>
        </div>
        <div>
          <p className="text-neutral-700 text-subtitle-2 mb-2 ">썸네일 선택</p>
          <label
            htmlFor="thumbnail"
            className="flex">
            <img
              src={ThumbnailSvg}
              alt="썸네일 선택"
              className="w-[194px] h-[124px] object-cover text-gray-400 group-hover:text-gray-600"
            />
            <input
              id="thumbnail"
              type="file"
              onChange={e => setFile(e.target.files[0])}
              className="opacity-0"
            />
            <p className="text-caption text-gray-400 group-hover:text-gray-600">
              썸네일로 지정할 이미지를 선택해주세요
            </p>
          </label>
        </div>
        <div>
          <p>그룹 이름</p>
          <input
            placeholder="이름을 지어주세요"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="border border-neutrals-80 rounded-sm w-[392px] h-[40px] p-2.5"
          />
        </div>
        <div>
          <p>그룹 설명</p>
          <input
            placeholder="설명을 적어주세요"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="border border-neutrals-80 rounded-sm w-[392px] h-[80px] p-2.5"
          />
        </div>
        <div className="flex gap-2.5">
          <button
            onClick={handleSubmit}
            className="w-[105px] h-[34px] bg-primary-300 rounded-sm text-white flex justify-center items-center text-button">
            그룹 만들기
          </button>
          <button
            className="w-[65px] h-[34px] bg-white border border-primary-100 rounded-sm text-primary-200 text-button"
            onClick={closeModalHandle}>
            취소
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreateGroupModal
