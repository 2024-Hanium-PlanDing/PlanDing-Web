import basicApi from '..'
import {
  createGroup,
  groupInfo,
  removeGroup,
  setGroup,
  setGroupSchedule
} from '../../redux/modules/groupReducer'
import { setGroupTodo } from '../../redux/modules/groupTodoReducer'
import { normalizeFileName } from '../../utils/normalizeFileName'

export const setGroupList = () => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/group/paging`, {
      params: {
        page: 0,
        size: 12
      }
    })
    dispatch(setGroup(response.data))
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const createGroupList = (title, description, file) => async dispatch => {
  try {
    const formData = new FormData()
    let variables = {
      name: title,
      description: description
    }

    formData.append(
      'request',
      new Blob([JSON.stringify(variables)], { type: 'application/json' })
    )
    const normalizedFile = new File([file], normalizeFileName(file), {
      type: file.type
    })
    formData.append('thumbnail', normalizedFile)

    const response = await basicApi.post('/api/v1/group', formData)

    dispatch(createGroup(response.data.data))
    return response.data
  } catch (error) {
    console.error(
      'Error adding group:',
      error.response ? error.response.data : error.message
    )
    throw error
  }
}

// 그룹 삭제

export const deleteGroup = groupCode => async dispatch => {
  try {
    const response = await basicApi.delete(`/api/v1/group/${groupCode}`, {})

    dispatch(removeGroup(groupCode))
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

//그룹 나가기

export const leaveGroup = groupCode => async dispatch => {
  try {
    const response = await basicApi.delete(
      `/api/v1/group/leave/${groupCode}`,
      {}
    )

    dispatch(removeGroup(groupCode))
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const getGroupInfo = groupCode => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/group/${groupCode}`)
    dispatch(groupInfo(response.data))
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const getGroupSchedule =
  (groupCode, startDate, endDate) => async dispatch => {
    try {
      const response = await basicApi.get(
        `/api/v1/group-rooms/week/${groupCode}/${startDate}/${endDate}`
      )
      dispatch(setGroupSchedule(response.data.data))
    } catch (error) {
      console.error('Error fetching schedule:', error)
      throw error
    }
  }

export const getGroupDetailSchedule = async (groupCode, scheduleId) => {
  try {
    const response = await basicApi.get(
      `/api/v1/group-rooms/${groupCode}/${scheduleId}`
    )
    return response.data
  } catch (error) {
    console.error('Error fetching schedule:', error)
    throw error
  }
}

export const getGroupTodo =
  (groupCode, startDate, endDate) => async dispatch => {
    try {
      const response = await basicApi.get(
        `/api/v1/group-rooms/planner/week/${groupCode}/${startDate}/${endDate}`
      )
      dispatch(setGroupTodo(response.data.data))
    } catch (error) {
      console.error('Error fetching schedule:', error)
      throw error
    }
  }
