import React, { Fragment, useContext } from 'react'

import { Form, Input, Button, notification } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'

import { ContentCenter } from '@ui'
import { AuthCard } from '@features/auth'
import { FirebaseContext } from '@lib/firebase'
import { WithAuthorization } from '@features/common'

import './styles.scss'

export const SignInPage = () => {
  const [form] = Form.useForm()
  const firebase = useContext(FirebaseContext)
  const history = useHistory()

  const handleSubmitForm = async ({ email, password }) => {
    try {
      await firebase.doSignInWithEmailAndPassword(email, password)

      form.resetFields()

      history.push('/')
    } catch (e) {
      notification.error({
        message: 'Ошибка авторизации',
        description: e.message
      })
    }
  }

  return (
    <WithAuthorization type="not-authenticated">
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
            <Form
              form={form}
              onFinish={handleSubmitForm}
              initialValues={{ email: '', password: '' }}
              size="large"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите ваш email'
                  },
                  {
                    type: 'email',
                    message: 'Пожалуйста, введите корректный email адрес'
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
                    message: 'Пожалуйста, введите ваш пароль'
                  }
                ]}
                hasFeedback
              >
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
    </WithAuthorization>
  )
}
