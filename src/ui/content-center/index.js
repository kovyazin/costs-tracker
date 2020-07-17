import React from 'react'

import classnames from 'classnames'
import PropTypes from 'prop-types'

import './styles.scss'

export const ContentCenter = ({ children, className, fullHeight = true }) => {
  return (
    <div
      className={classnames('content-center', {
        className,
        'full-height': fullHeight
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
