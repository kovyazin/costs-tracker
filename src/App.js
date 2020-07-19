import React, { useEffect, useContext } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Pages } from '@pages'
import { FirebaseContext } from '@lib/firebase'
import { sessionActions } from '@lib/store/session'

import 'antd/dist/antd.css'

export const App = () => {
  const dispatch = useDispatch()
  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    const listener = firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(sessionActions.login(user))
      } else {
        dispatch(sessionActions.logout())
      }
    })

    return () => listener()
  }, [firebase.auth, dispatch])

  return (
    <Router>
      <Pages />
    </Router>
  )
}
