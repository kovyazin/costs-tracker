import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons'

import { ContentCenter } from '@ui'
import { AuthCard } from '@features/auth'

export const SignUpPage = () => {
  const [form] = Form.useForm()

  return (
    <div>
      <ContentCenter>
        <AuthCard
          title="Регистрация"
          footer={
            <Fragment>
              У вас уже есть аккаунт? <Link to="/sign-in">Авторизация</Link>
            </Fragment>
          }
        >
          <Form
            form={form}
            onFinish={(values) => console.log(values)}
            initialValues={{
              username: '',
              email: '',
              password: '',
              passwordConfirmation: ''
            }}
            size="large"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите ваше имя'
                },
                {
                  min: 2,
                  message: 'Имя не божет быть короче двух символов'
                }
              ]}
              hasFeedback
            >
              <Input prefix={<UserOutlined />} placeholder="Введите ваше имя" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Пожалуйста, введите корректный email адрес'
                },
                {
                  required: true,
                  message: 'Пожалуйста, введите ваш email'
                }
              ]}
              hasFeedback
            >
              <Input
                prefix={<MailOutlined />}
                placeholder="Введите ваш email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, введите желаемый пароль'
                },
                {
                  min: 8,
                  message: 'Пароль не должен быть короче 8 символов'
                }
              ]}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Введите желаемый пароль"
              />
            </Form.Item>
            <Form.Item
              name="passwordConfirmation"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Пожалуйста, повторите пароль'
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve()
                    }

                    return Promise.reject('Введённые вами пароли не совпадают')
                  }
                })
              ]}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Повторите пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Зарегистрироваться
              </Button>
            </Form.Item>
          </Form>
        </AuthCard>
      </ContentCenter>
    </div>
  )
}
