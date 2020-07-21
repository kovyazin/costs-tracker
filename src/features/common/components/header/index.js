import React, { useContext } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { Button } from 'antd'

import { FirebaseContext } from '@lib/firebase'

import classes from './styles.module.scss'

export const Header = () => {
  const firebase = useContext(FirebaseContext)

  return (
    <div className={classes.wrapper}>
      <Link to="/" className={classes.logo}>
        Costs Tracker
      </Link>
      <nav className={classes.navigation}>
        <NavLink to="/" className={classes.navigationLink}>
          Главная
        </NavLink>
        <NavLink to="/settings" className={classes.navigationLink}>
          Настройки
        </NavLink>
      </nav>
      <Button type="primary" onClick={firebase.doSignOut}>
        Выйти
      </Button>
    </div>
  )
}
