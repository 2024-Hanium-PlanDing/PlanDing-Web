import basicApi from '..'
import {
  createGroup,
  groupInfo,
  removeGroup,
  setGroup,
  setGroupSchedule
} from '../../redux/modules/groupReducer'
import { setGroupTodo } from '../../redux/modules/groupTodoReducer'

export const setGroupList = token => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/group`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    dispatch(setGroup(response.data))
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const createGroupList =
  (token, title, description, file) => async dispatch => {
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
      formData.append('thumbnail', file)

      const response = await basicApi.post('/api/v1/group', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      })

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

export const deleteGroup = (token, groupCode) => async dispatch => {
  try {
    const response = await basicApi.delete(`/api/v1/group/${groupCode}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    dispatch(removeGroup(groupCode))
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

//그룹 나가기

export const leaveGroup = (token, groupCode) => async dispatch => {
  try {
    const response = await basicApi.delete(`/api/v1/group/leave/${groupCode}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    dispatch(removeGroup(groupCode))
    return response.data
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const getGroupInfo = (token, groupCode) => async dispatch => {
  try {
    const response = await basicApi.get(`/api/v1/group/${groupCode}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    dispatch(groupInfo(response.data))
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}

export const getGroupSchedule =
  (token, groupCode, startDate, endDate) => async dispatch => {
    try {
      const response = await basicApi.get(
        `/api/v1/group-rooms/week/${groupCode}/${startDate}/${endDate}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      dispatch(setGroupSchedule(response.data.data))
    } catch (error) {
      console.error('Error fetching schedule:', error)
      throw error
    }
  }

export const getGroupTodo =
  (token, groupCode, startDate, endDate) => async dispatch => {
    try {
      const response = await basicApi.get(
        `/api/v1/group-rooms/planner/week/${groupCode}/${startDate}/${endDate}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      )
      dispatch(setGroupTodo(response.data.data))
    } catch (error) {
      console.error('Error fetching schedule:', error)
      throw error
    }
  }
