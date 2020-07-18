import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Pages } from '@pages'
import { FirebaseContext } from '@lib/firebase'
import { store } from '@lib/store'
import { Firebase } from '@api/firebase'

import 'antd/dist/antd.css'

export const App = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Provider store={store}>
        <Router>
          <Pages />
        </Router>
      </Provider>
    </FirebaseContext.Provider>
  )
}
