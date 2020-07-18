import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import { Pages } from '@pages'
import { FirebaseContext } from '@lib/firebase'
import { Firebase } from '@api/firebase'

import 'antd/dist/antd.css'

export const App = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <Pages />
      </Router>
    </FirebaseContext.Provider>
  )
}
