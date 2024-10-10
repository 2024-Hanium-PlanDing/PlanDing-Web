import basicApi from '..'
import {
  removeInvitation,
  setInvitation
} from '../../redux/modules/inviteReducer'

export const getInvitation = () => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/invitation`)
    dispatch(setInvitation(response.data))
  } catch (error) {
    console.error(error)
  }
}

export const postInvitation = async (groupCode, userCode) => {
  const data = {
    groupCode,
    userCode
  }
  try {
    const response = await basicApi.post(`/api/v1/invitation`, data)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const acceptInvitation = (groupCode, inviteCode) => async dispatch => {
  try {
    const response = await basicApi.get(
      `/api/v1/invitation/accept/${groupCode}/${inviteCode}`
    )
    dispatch(removeInvitation(inviteCode))
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const declineInvitation = inviteCode => async dispatch => {
  try {
    const response = await basicApi.delete(
      `/api/v1/invitation/decline/${inviteCode}`
    )
    dispatch(removeInvitation(inviteCode))
    return response.data
  } catch (error) {
    console.error(error)
  }
}
