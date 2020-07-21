import React from 'react'

import PropTypes from 'prop-types'

import classes from './styles.module.scss'

export const MainTemplate = ({ header, footer, sidebar, children }) => {
  return (
    <div className={classes.wrapper}>
      {header && <div className={classes.header}>{header}</div>}
      {sidebar && <div className={classes.sidebar}>{sidebar}</div>}
      {children && <div className={classes.content}>{children}</div>}
      {footer && <div className={classes.footer}>{footer}</div>}
    </div>
  )
}

MainTemplate.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  sidebar: PropTypes.node
}
