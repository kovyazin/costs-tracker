import React from 'react'

import PropTypes from 'prop-types'
import { Card } from 'antd'

import './styles.scss'

export const AuthCard = ({ title, children, footer }) => {
  return (
    <div className="auth-card">
      <Card title={<span className="auth-card__title">{title}</span>}>
        {children}
      </Card>
      {footer && <div className="auth-card__footer">{footer}</div>}
    </div>
  )
}

AuthCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node
}
