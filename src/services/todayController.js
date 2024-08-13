import basicApi from '.'

export const getTodaySchedule = async token => {
  try {
    const response = await basicApi.get(`/api/v1/common/schedule/today`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
