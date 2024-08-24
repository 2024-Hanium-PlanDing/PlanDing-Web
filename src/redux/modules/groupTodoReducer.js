const SET_GROUP_TODO = 'SET_GROUP_TODO'
const ADD_GROUP_TODO = 'ADD_GROUP_TODO'
const REMOVE_GROUP_TODO = 'REMOVE_GROUP_TODO'

export const setGroupTodo = data => ({
  type: SET_GROUP_TODO,
  payload: data
})

export const addGroupTodo = data => ({
  type: ADD_GROUP_TODO,
  payload: data
})

export const removeGroupTodo = id => ({
  type: REMOVE_GROUP_TODO,
  payload: id
})

const initialState = {
  groupTodo: []
}
const groupTodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GROUP_TODO:
      return {
        ...state,
        groupTodo: action.payload
      }
    case ADD_GROUP_TODO:
      return {
        ...state,
        groupTodo: [...state.groupTodo, action.payload]
      }
    case REMOVE_GROUP_TODO:
      return {
        ...state,
        groupTodo: state.groupTodo.filter(
          schedule => schedule.id !== action.payload
        )
      }
    default:
      return state
  }
}

export default groupTodoReducer