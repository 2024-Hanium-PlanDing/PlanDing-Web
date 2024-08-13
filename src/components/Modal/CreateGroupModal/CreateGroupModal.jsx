import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../../redux/modules/modalReducer'
import { useState } from 'react'
import { createGroupList } from '../../../services/Group/groupController'
import CreateGroupHeader from './atom/CreateGroupHeader'
import CreateGroupThumbnail from './atom/CreateGroupThumbnail'
import CreateGroupText from './atom/CreateGroupText'

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
      <div className="w-[472px] h-[649px] bg-neutrals-0 rounded-2xl p-5">
        <div className="w-full h-full border border-primary-75 rounded-lg p-5 flex flex-col gap-6">
          <CreateGroupHeader />
          <CreateGroupThumbnail setFile={setFile} />
          <CreateGroupText
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
          />
          <div className="flex gap-2.5 justify-end">
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
    </div>
  )
}

export default CreateGroupModal
