const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

export const openModal = modalName => ({
  type: OPEN_MODAL,
  payload: modalName
})

export const closeModal = modalName => ({
  type: CLOSE_MODAL,
  payload: modalName
})

const initialState = {
  createGroupModal: false,
  createTodoModal: false,
  inviteGroupModal: false
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        [action.payload]: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        [action.payload]: false
      }
    default:
      return state
  }
}

export default modalReducer
