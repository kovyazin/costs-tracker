import React, { useContext } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { Button } from 'antd'

import { FirebaseContext } from '@lib/firebase'

import './styles.scss'

export const Header = () => {
  const firebase = useContext(FirebaseContext)

  return (
    <div className="header">
      <Link to="/" className="logo header__logo">
        Costs Tracker
      </Link>
      <nav className="navigation header__navigation">
        <NavLink to="/" className="navigation__link">Главная</NavLink>
        <NavLink to="/settings" className="navigation__link">Настройки</NavLink>
      </nav>
      <Button type="primary" onClick={firebase.doSignOut}>
        Выйти
      </Button>
    </div>
  )
}