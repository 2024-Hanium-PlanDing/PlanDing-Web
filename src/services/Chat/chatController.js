import basicApi from '..'

export const postChat = async (content, groupCode) => {
  const data = {
    content: content
  }
  try {
    const response = await basicApi.post(`/api/v1/chat/${groupCode}`, data)
    return response
  } catch (error) {
    console.error(error)
  }
}
