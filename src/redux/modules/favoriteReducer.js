const SET_FAVORITE = 'SET_FAVORITE'

export const setFavorite = data => ({
  type: SET_FAVORITE,
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
        groups: action.payload
      }
    default:
      return state
  }
}

export default favoriteReducer
