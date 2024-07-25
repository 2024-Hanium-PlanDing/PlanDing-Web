import basicApi from '..'

export const getInvitation = async token => {
  try {
    const response = await basicApi.get(`/api/v1/invitation`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (error) {
    console.error(error)
  }
}

export const postInvitation = async (token, groupId, userCode) => {
  const data = {
    groupId,
    userCode
  }
  try {
    const response = await basicApi.post(`/api/v1/invitation`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (error) {
    console.error(error)
  }
}

export const acceptInvitation = async (token, groupCode, inviteCode) => {
  try {
    const response = await basicApi.get(
      `/api/v1/invitation/accept/${groupCode}/${inviteCode}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response
  } catch (error) {
    console.error(error)
  }
}

export const declineInvitation = async (token, inviteCode) => {
  try {
    const response = await basicApi.delete(
      `/api/v1/invitation/decline/${inviteCode}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return response
  } catch (error) {
    console.error(error)
  }
}
