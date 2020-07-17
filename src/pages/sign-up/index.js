import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
import { Form, Input, Button } from 'antd'
import { MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons'

import { ContentCenter } from '@ui'
import { AuthCard } from '@features/auth'

export const SignUpPage = () => {
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
          <Form size="large">
            <Form.Item>
              <Input prefix={<UserOutlined />} placeholder="Введите ваше имя" />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<MailOutlined />}
                placeholder="Введите ваш email"
              />
            </Form.Item>
            <Form.Item>
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Введите желаемый пароль"
              />
            </Form.Item>
            <Form.Item>
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
