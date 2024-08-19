const SET_FAVORITE = 'SET_FAVORITE'
// const ADD_FAVORITE = 'ADD_FAVORITE'

export const setFavorite = data => ({
  type: SET_FAVORITE,
  payload: data
})

const initialState = {
  favorites: []
}

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        favorites: action.payload
      }

    default:
      return state
  }
}

export default favoriteReducer
