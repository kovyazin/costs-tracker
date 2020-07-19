import * as types from './types'

const initialState = {
  user: {},
  status: 'pending'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case types.SET_STATUS:
      return {
        ...state,
        status: action.payload
      }
    default:
      return state
  }
}
