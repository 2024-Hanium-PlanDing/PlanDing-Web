import basicApi from '.'

export const getTodaySchedule = async () => {
  try {
    const response = await basicApi.get(`/api/v1/common/schedule/today`, {})
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
