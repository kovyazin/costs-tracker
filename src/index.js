import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'

import { App } from './app'

import { Firebase } from '@api/firebase'
import { FirebaseContext } from '@lib/firebase'
import { store } from '@lib/store'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseContext.Provider>,
  document.getElementById('root')
)
