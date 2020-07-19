import { useEffect } from 'react'

import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { sessionSelectors } from '@lib/store/session'

export const WithAuthorization = ({ children, type }) => {
  const status = useSelector(sessionSelectors.status)
  const history = useHistory()

  useEffect(() => {
    if (status === 'authenticated' && status !== type) history.push('/')
    if (status === 'not-authenticated' && status !== type) history.push('/sign-in')
  }, [history, status, type])

  if (status === 'pending' || status !== type) return null
  return children
}

WithAuthorization.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['not-authenticated', 'authenticated'])
}
