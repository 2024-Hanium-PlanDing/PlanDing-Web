const SET_INVITATION = 'SET_INVITATION'

const REMOVE_INVITATION = 'REMOVE_INVITATION'

export const setInvitation = invite => ({
  type: SET_INVITATION,
  payload: invite
})

export const removeInvitation = invite => ({
  type: REMOVE_INVITATION,
  payload: invite
})
const initialState = {
  invitation: []
}
const inviteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INVITATION:
      return {
        ...state,
        invitation: action.payload
      }
    case REMOVE_INVITATION:
      return {
        ...state,
        invitation: {
          ...state.groups,
          data: state.invitation.data.filter(
            invitation => invitation.inviteCode !== action.payload
          )
        }
      }

    default:
      return state
  }
}

export default inviteReducer
