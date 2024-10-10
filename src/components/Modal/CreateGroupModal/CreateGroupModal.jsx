import { useDispatch, useSelector } from 'react-redux'
import { closeModal } from '../../../redux/modules/modalReducer'
import { useState } from 'react'
import { createGroupList } from '../../../services/Group/groupController'
import CreateGroupHeader from './atom/CreateGroupHeader'
import CreateGroupThumbnail from './atom/CreateGroupThumbnail'
import CreateGroupText from './atom/CreateGroupText'
import SelectBox from '../SelectBox'

const CreateGroupModal = () => {
  const dispatch = useDispatch()
  const modalState = useSelector(state => state.modal.createGroupModal)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [file, setFile] = useState(null)

  if (!modalState) {
    return null
  }

  const handleSubmit = async () => {
    if (file) {
      try {
        await dispatch(createGroupList(title, description, file))
        dispatch(closeModal('createGroupModal'))
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
    dispatch(closeModal('createGroupModal'))
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
          <SelectBox
            handleSubmit={handleSubmit}
            closeModalHandle={closeModalHandle}
            text="그룹 만들기"
          />
        </div>
      </div>
    </div>
  )
}

export default CreateGroupModal
