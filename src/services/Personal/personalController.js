import basicApi from '..'

export const createPersonalSchedule = async (token, scheduleData) => {
  try {
    const response = await basicApi.post('/api/v1/schedule', scheduleData, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })

    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}
