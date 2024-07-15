const SET_FAVORITE = 'SET_FAVORITE'
const ADD_FAVORITE = 'ADD_FAVORITE'

export const setFavorite = data => ({
  type: SET_FAVORITE,
  payload: data
})

export const addFavorite = data => ({
  type: ADD_FAVORITE,
  payload: data
})

const initialState = {
  favorites: {
    data: []
  }
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          data: action.payload
        }
      }
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          data: [...state.favorites.data, action.payload]
        }
      }
    default:
      return state
  }
}

export default favoriteReducer
