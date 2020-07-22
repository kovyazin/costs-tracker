import React, { Fragment, useEffect } from 'react'

import PropTypes from 'prop-types'
import { Modal, Form, Input, Select, Radio, Button, Space } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

import { DatePicker } from '@ui'

import classes from './styles.module.scss'

export const EditCostsModal = ({ visible, onCancel, type = 'edit' }) => {
  const [form] = Form.useForm()

  return (
    <Modal
      title={
        type === 'edit' ? 'Редактирование расходов' : 'Создание нового расхода'
      }
      visible={visible}
      onCancel={onCancel}
      footer={null}
      className={classes.modal}
      forceRender
    >
      <Form
        form={form}
        onFinish={console.log}
        initialValues={{
          title: '',
          categories: [],
          date: dayjs(),
          description: '',
          methodOfSum: 'auto',
          products: [],
          sum: ''
        }}
        layout="vertical"
      >
        <Form.Item name="title" label="Заголовок">
          <Input placeholder="Введите заголовок" />
        </Form.Item>

        <Form.Item name="categories" label="Категория расхода">
          <Select
            mode="tags"
            placeholder="Выберите категории, относящиеся к данному расходу"
          />
        </Form.Item>

        <Form.Item name="date" label="Дата расхода">
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="description" label="Дополнительное описание">
          <Input.TextArea
            rows={4}
            placeholder="Добавьте дополнительное описание, если считаете нужным"
          />
        </Form.Item>

        <Form.Item name="methodOfSum" label="Метод подсчёта суммы">
          <Radio.Group>
            <Radio value="auto">
              Указать купленные товары и рассчитать сумму автоматически
            </Radio>
            <Radio value="handle">Указать сумму вручную</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.methodOfSum !== currentValues.methodOfSum
          }
          noStyle
        >
          {({ getFieldValue }) => {
            const productsListFields = (
              <Form.List name="products">
                {(fields, { add, remove }) => (
                  <div style={{ marginBottom: 24 }}>
                    {fields.map((field) => (
                      <Space key={field.key} align="baseline">
                        <Form.Item
                          {...field}
                          name={[field.name, 'productName']}
                          fieldKey={[field.fieldKey, 'productName']}
                        >
                          <Input placeholder="Введите название товара" />
                        </Form.Item>

                        <Form.Item
                          {...field}
                          name={[field.name, 'productPrice']}
                          fieldKey={[field.fieldKey, 'productPrice']}
                        >
                          <Input placeholder="Введите цену товара" />
                        </Form.Item>

                        <MinusCircleOutlined
                          onClick={() => remove(field.name)}
                        />
                      </Space>
                    ))}

                    <Button
                      type="dashed"
                      icon={<PlusOutlined />}
                      onClick={() => add()}
                      block
                    >
                      Добавить товар
                    </Button>
                  </div>
                )}
              </Form.List>
            )

            const sumField = (
              <Form.Item name="sum">
                <Input placeholder="Введите сумму данного расхода" />
              </Form.Item>
            )

            return getFieldValue('methodOfSum') === 'auto'
              ? productsListFields
              : sumField
          }}
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Добавить в список расходов
        </Button>
      </Form>
    </Modal>
  )
}

EditCostsModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['edit', 'create'])
}
