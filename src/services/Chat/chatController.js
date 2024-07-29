import basicApi from '..'

export const postChat = async (token, content, groupCode) => {
  const data = {
    content: content
  }
  try {
    const response = await basicApi.post(`/api/v1/chat/${groupCode}`, data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response
  } catch (error) {
    console.error(error)
  }
}
