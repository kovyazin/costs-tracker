import React from 'react'

import classnames from 'classnames'
import PropTypes from 'prop-types'

import classes from './styles.module.scss'

export const ContentCenter = ({ children, className, fullHeight = true }) => {
  return (
    <div
      className={classnames(classes.wrapper, {
        className,
        [classes.fullHeight]: fullHeight
      })}
    >
      {children}
    </div>
  )
}

ContentCenter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  fullHeight: PropTypes.bool
}
