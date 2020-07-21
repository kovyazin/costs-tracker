import React, { useEffect, useContext } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ConfigProvider } from 'antd'
import dayjs from 'dayjs'

import { Pages } from '@pages'
import { FirebaseContext } from '@lib/firebase'
import { sessionActions } from '@lib/store/session'

import ruRU from 'antd/es/locale/ru_RU'
import 'dayjs/locale/ru'

import 'antd/dist/antd.css'

dayjs.locale('ru')

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
    <ConfigProvider locale={ruRU}>
      <Router>
        <Pages />
      </Router>
    </ConfigProvider>
  )
}
