import * as types from './types'

export const login = (user) => (dispatch) => {
  dispatch(setUser(user))
  dispatch(setStatus('authenticated'))
}

export const logout = () => (dispatch) => {
  dispatch(setUser({}))
  dispatch(setStatus('not-authenticated'))
}

const setUser = (user) => ({
  type: types.SET_USER,
  payload: user
})

const setStatus = (status) => ({
  type: types.SET_STATUS,
  payload: status
})