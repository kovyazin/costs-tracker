import { combineReducers } from 'redux'

import { sessionReducer } from './session'

export const rootReducer = combineReducers({
  session: sessionReducer
})
