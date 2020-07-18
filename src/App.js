import React, { useEffect, useContext } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Pages } from '@pages'
import { FirebaseContext } from '@lib/firebase'
import { authActions } from '@features/auth'

import 'antd/dist/antd.css'

export const App = () => {
  const dispatch = useDispatch()
  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    const listener = firebase.auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(authActions.setUser(authUser))
      } else {
        dispatch(authActions.setUser(null))
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
