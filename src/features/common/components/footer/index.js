import React from 'react'

import classes from './styles.module.scss'

export const Footer = () => {
  return (
    <div className={classes.footer}>
      Make by{' '}
      <a
        href="https://github.com/kovyazin"
        rel="noopener noreferrer"
        target="_blank"
      >
        kovyazin
      </a>
    </div>
  )
}
