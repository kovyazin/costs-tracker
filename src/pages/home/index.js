import React, { useState } from 'react'

import { Card, Row, Select, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { MainTemplate } from '@ui'
import { Header, WithAuthorization, Footer } from '@features/common'
import { CostsList, FiltersPanel, EditCostsModal } from '@features/costs'

import classes from './styles.module.scss'

const { Option } = Select

export const HomePage = () => {
  return (
    <WithAuthorization type="authenticated">
      <MainTemplate
        header={<Header />}
        footer={<Footer />}
        sidebar={<FiltersPanel />}
      >
        <Card bordered={false}>
          <CostsHeader />
          <CostsList />
        </Card>
      </MainTemplate>
    </WithAuthorization>
  )
}

const CostsHeader = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <Row className={classes.costsHeader} justify="space-between">
      <Select defaultValue="date-increase">
        <Option value="date-increase">По дате (по возрастанию)</Option>
        <Option value="date-decrease">По дате (по убыванию)</Option>
        <Option value="sum-increase">По сумме (по возрастанию)</Option>
        <Option value="sum-decrease">По сумме (по убыванию)</Option>
      </Select>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => setModalVisible(true)}
      >
        Добавить новые расходы
      </Button>
      <EditCostsModal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        type="create"
      />
    </Row>
  )
}
