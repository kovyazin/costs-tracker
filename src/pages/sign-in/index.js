import React, { Fragment, useContext, useState } from 'react'

import { Form, Input, Button, notification } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { Link, useHistory } from 'react-router-dom'

import { ContentCenter } from '@ui'
import { AuthCard } from '@features/auth'
import { FirebaseContext } from '@lib/firebase'
import { WithAuthorization } from '@features/common'

import classes from './styles.module.scss'

export const SignInPage = () => {
  const [form] = Form.useForm()
  const firebase = useContext(FirebaseContext)
  const history = useHistory()

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitForm = async ({ email, password }) => {
    setIsLoading(true)

    try {
      await firebase.doSignInWithEmailAndPassword(email, password)

      form.resetFields()

      setIsLoading(false)

      history.push('/')
    } catch (e) {
      setIsLoading(false)

      notification.error({
        message: 'Ошибка авторизации',
        description: e.message
      })
    }
  }

  return (
    <WithAuthorization type="not-authenticated">
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
              <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                block
              >
                Войти
              </Button>
              <div className={classes.linkToForgotPassword}>
                <Link to="/forgot-password">Забыли пароль?</Link>
              </div>
            </Form.Item>
          </Form>
        </AuthCard>
      </ContentCenter>
    </WithAuthorization>
  )
}
