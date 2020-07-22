import React from 'react'

import PropTypes from 'prop-types'
import { Modal, Form, Input, Select, Radio, Button, InputNumber } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'

import { DatePicker } from '@ui'
import { FirebaseContext } from '@lib/firebase'

import classes from './styles.module.scss'

export const EditCostsModal = ({ visible, onCancel, type = 'edit' }) => {
  const [form] = Form.useForm()
  // const firebase = useContext(FirebaseContext)

  const handleSubmitForm = (values) => {
    const transformatedValues = {
      ...values,
      date: dayjs(values.date).format('YYYY-MM-DD')
    }

    console.log(transformatedValues)
  }

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
        onFinish={handleSubmitForm}
        initialValues={{
          title: '',
          categories: [],
          date: dayjs(),
          description: '',
          methodOfSum: 'auto',
          products: [
            {
              productName: '',
              productPrice: ''
            }
          ],
          sum: ''
        }}
        layout="vertical"
      >
        <Form.Item
          name="title"
          label="Заголовок"
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Пожалуйста, введите заголовок'
            }
          ]}
          required={false}
        >
          <Input placeholder="Введите заголовок" />
        </Form.Item>

        <Form.Item
          name="date"
          label="Дата расхода"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, укажите дату расхода'
            }
          ]}
          required={false}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="methodOfSum"
          label="Метод подсчёта суммы"
          required={false}
        >
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
                {(fields, { add, remove }) => {
                  return (
                    <div style={{ marginBottom: 24 }}>
                      {fields.map((field) => {
                        return (
                          <div key={field.key} className={classes.productRow}>
                            <div className={classes.productName}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'productName']}
                                fieldKey={[field.fieldKey, 'productName']}
                                rules={[
                                  {
                                    required: true,
                                    whitespace: true,
                                    message:
                                      'Пожалуйста, укажите название товара'
                                  }
                                ]}
                              >
                                <Input placeholder="Введите название товара" />
                              </Form.Item>
                            </div>

                            <div className={classes.productPrice}>
                              <Form.Item
                                {...field}
                                name={[field.name, 'productPrice']}
                                fieldKey={[field.fieldKey, 'productPrice']}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Пожалуйста, укажите цену товара'
                                  }
                                ]}
                              >
                                <InputNumber
                                  min={0}
                                  formatter={(value) => {
                                    if (value !== '') return `${value}₽`
                                    return value
                                  }}
                                  parser={(value) => value.replace('₽', '')}
                                  placeholder="Введите цену товара"
                                  className={classes.inputNumber}
                                />
                              </Form.Item>
                            </div>

                            {fields.length > 1 && (
                              <MinusCircleOutlined
                                onClick={() => remove(field.name)}
                                className={classes.productDeleteBtn}
                              />
                            )}
                          </div>
                        )
                      })}

                      <Button
                        type="dashed"
                        icon={<PlusOutlined />}
                        onClick={() => add()}
                        block
                      >
                        Добавить товар
                      </Button>
                    </div>
                  )
                }}
              </Form.List>
            )

            const sumField = (
              <Form.Item
                name="sum"
                required={false}
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, укажите сумму данного расхода'
                  }
                ]}
              >
                <InputNumber
                  min={0}
                  formatter={(value) => {
                    if (value !== '') return `${value}₽`
                    return value
                  }}
                  parser={(value) => value.replace('₽', '')}
                  placeholder="Введите цену товара"
                  className={classes.inputNumber}
                />
              </Form.Item>
            )

            return getFieldValue('methodOfSum') === 'auto'
              ? productsListFields
              : sumField
          }}
        </Form.Item>

        <Form.Item name="categories" label="Категория расхода" required={false}>
          <Select
            mode="tags"
            placeholder="Выберите категории, относящиеся к данному расходу"
          />
        </Form.Item>

        <Form.Item
          name="description"
          label="Дополнительное описание"
          required={false}
        >
          <Input.TextArea
            rows={4}
            placeholder="Добавьте дополнительное описание, если считаете нужным"
          />
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
