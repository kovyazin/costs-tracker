import React, { Fragment } from 'react'

import { Form, Input, Button } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

import { ContentCenter } from '@ui'
import { AuthCard } from '@features/auth'

import './styles.scss'

export const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <ContentCenter>
        <AuthCard
          title="Авторизация"
          footer={
            <Fragment>
              У вас ещё нет аккаунта? <Link to="/sign-up">Регистрация</Link>
            </Fragment>
          }
        >
          <Form size="large">
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
                placeholder="Введите ваш пароль"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Войти
              </Button>
              <div className="sign-in-page__forgot-password-link-wrapper">
                <Link to="/forgot-password">Забыли пароль?</Link>
              </div>
            </Form.Item>
          </Form>
        </AuthCard>
      </ContentCenter>
    </div>
  )
}
