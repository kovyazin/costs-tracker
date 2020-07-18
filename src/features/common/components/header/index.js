import React, { useContext } from 'react'

import { Menu, Button } from 'antd'

import { FirebaseContext } from '@lib/firebase'

import './styles.scss'

export const Header = () => {
  const firebase = useContext(FirebaseContext)

  return (
    <div className="header">
      <div className="logo header__logo">
        Costs Tracker
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item>Главная</Menu.Item>
        <Menu.Item>Настройки</Menu.Item>
      </Menu>
      <Button type="primary" onClick={firebase.doSignOut}>
        Выйти
      </Button>
    </div>
  )
}