import basicApi from '..'
import {
  removeInvitation,
  setInvitation
} from '../../redux/modules/inviteReducer'

export const getInvitation = token => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/invitation`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    dispatch(setInvitation(response.data))
  } catch (error) {
    console.error(error)
  }
}

export const postInvitation = async (token, groupCode, userCode) => {
  const data = {
    groupCode,
    userCode
  }
  try {
    const response = await basicApi.post(`/api/v1/invitation`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const acceptInvitation =
  (token, groupCode, inviteCode) => async dispatch => {
    try {
      const response = await basicApi.get(
        `/api/v1/invitation/accept/${groupCode}/${inviteCode}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
      dispatch(removeInvitation(inviteCode))
      return response.data
    } catch (error) {
      console.error(error)
    }
  }

export const declineInvitation = (token, inviteCode) => async dispatch => {
  try {
    const response = await basicApi.delete(
      `/api/v1/invitation/decline/${inviteCode}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    dispatch(removeInvitation(inviteCode))
    return response.data
  } catch (error) {
    console.error(error)
  }
}
