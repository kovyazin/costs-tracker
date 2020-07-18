import React from 'react'

import PropTypes from 'prop-types'
import { Layout } from 'antd'

import './styles.scss'

const { Header, Content, Footer } = Layout

export const MainTemplate = ({ header, footer, children }) => {
  return (
    <Layout className="main-template">
      {header && <Header>{header}</Header>}
      <Content>{children}</Content>
      {footer && <Footer>{footer}</Footer>}
    </Layout>
  )
}

MainTemplate.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node
}
