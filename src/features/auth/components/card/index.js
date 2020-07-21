import React from 'react'

import PropTypes from 'prop-types'
import { Card } from 'antd'

import classes from './styles.module.scss'

export const AuthCard = ({ title, children, footer }) => {
  return (
    <div className={classes.wrapper}>
      <Card title={<span className={classes.title}>{title}</span>}>
        {children}
      </Card>
      {footer && <div className={classes.footer}>{footer}</div>}
    </div>
  )
}

AuthCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node
}
