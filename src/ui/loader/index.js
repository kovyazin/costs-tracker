import React from 'react'

import PropTypes from 'prop-types'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

export const Loader = ({ size = 'large' }) => {
  return <Spin size={size} indicator={<LoadingOutlined />} />
}

Loader.propTypes = {
  size: PropTypes.string
}
