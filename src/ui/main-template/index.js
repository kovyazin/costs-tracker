import React from 'react'

import classnames from 'classnames'
import PropTypes from 'prop-types'

import './styles.scss'

export const MainTemplate = ({ header, footer, sidebar, children, className }) => {
  return (
    <div className={classnames('main-template', className)}>
      {header && <div className="main-template__header">{header}</div>}
      {sidebar && <div className="main-template__sidebar">{sidebar}</div>}
      {children && <div className="main-template__content">{children}</div>}
      {footer && <div className="main-template__footer">{footer}</div>}
    </div>
  )
}

MainTemplate.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  sidebar: PropTypes.node,
  className: PropTypes.string
}
