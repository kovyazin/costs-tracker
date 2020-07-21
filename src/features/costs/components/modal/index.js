import React, { Fragment } from 'react'

import {
  Modal,
  Form,
  Input,
  InputNumber,
  DatePicker,
  Button,
  Divider
} from 'antd'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'

import './styles.scss'

export const AddCostsModal = ({ visible, onCancel }) => {
  return (
    <Modal
      title="Добавление новых расходов"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      className="add-costs-modal"
    >
      <Form size="large" layout="vertical">
        <Form.Item label="Выберите дату расходов">
          <DatePicker />
        </Form.Item>

        <Form.Item label="Добавьте покупки">
          <Form.List name="products">
            {(fields, { add, remove }) => (
              <Fragment>
                {fields.map((field) => (
                  <div className="add-costs-modal__product-row" key={field.key}>
                    <Form.Item
                      {...field}
                      name={[field.name, 'product-name']}
                      fieldKey={[field.fieldKey, 'product-name']}
                      className="add-costs-modal__product-name-field"
                    >
                      <Input placeholder="Наименование товара" />
                    </Form.Item>
                    <Form.Item
                      {...field}
                      name={[field.name, 'price']}
                      fieldKey={[field.fieldKey, 'price']}
                      className="add-costs-modal__product-price-field"
                    >
                      <InputNumber
                        defaultValue={0}
                        formatter={(value) =>
                          `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        }
                        parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                      />
                    </Form.Item>

                    <MinusCircleOutlined onClick={() => remove(field.name)} />
                  </div>
                ))}

                <Form.Item>
                  <Button type="dashed" onClick={add} block>
                    <PlusOutlined /> Добавить покупку
                  </Button>
                </Form.Item>
              </Fragment>
            )}
          </Form.List>
        </Form.Item>

        <Divider orientation="center" plain>
          или
        </Divider>

        <Form.Item label="Укажите сумму вручную">
          <InputNumber />
        </Form.Item>
      </Form>
    </Modal>
  )
}
