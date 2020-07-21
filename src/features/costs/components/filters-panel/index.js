import React from 'react'

import { Card, Form, Select, Input, Space, Button } from 'antd'

import { DatePicker } from '@ui'

const { RangePicker } = DatePicker

export const FiltersPanel = () => {
  return (
    <Card className="filters-panel" bordered={false}>
      <h2>Фильтры</h2>
      <Form layout="vertical">
        <Form.Item label="Категории расходов">
          <Select mode="tags" placeholder="Например, 'продукты'" />
        </Form.Item>
        <Form.Item label="Дата расходов">
          <RangePicker allowEmpty={[true, true]} />
        </Form.Item>

        <Form.Item label="Сумма расходов" style={{ marginBottom: 0 }}>
          <Space align="baseline">
            от
            <Form.Item>
              <Input />
            </Form.Item>
            до
            <Form.Item>
              <Input />
            </Form.Item>
          </Space>
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Применить
        </Button>
      </Form>
    </Card>
  )
}
