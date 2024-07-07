import basicApi from '..'
import { addGroup } from '../../redux/modules/groupReducer'

export const CreateGroup =
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

      dispatch(addGroup(response.data))
      return response.data
    } catch (error) {
      console.error(
        'Error adding group:',
        error.response ? error.response.data : error.message
      )
      throw error
    }
  }
