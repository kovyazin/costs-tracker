import React, { useContext, useState } from 'react'

import { Form, Input, Button, notification } from 'antd'
import { MailOutlined } from '@ant-design/icons'

import { AuthCard } from '@features/auth'
import { ContentCenter } from '@ui'
import { FirebaseContext } from '@lib/firebase'
import { WithAuthorization } from '@features/common'

export const ForgotPasswordPage = () => {
  const [form] = Form.useForm()
  const firebase = useContext(FirebaseContext)

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitForm = async ({ email }) => {
    setIsLoading(true)

    try {
      await firebase.doPasswordReset(email)

      form.resetFields()

      notification.success({
        message: 'Поздравляем',
        description: `На ваш почтовый ящик "${email}" отправлено 
        письмо с инструкцией по дальнейшему восстановлению пароля`
      })
    } catch (e) {
      notification.error({
        message: 'Ошибка восстановления пароля',
        description: e.message
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <WithAuthorization type="not-authenticated">
      <ContentCenter>
        <AuthCard title="Восстановление пароля">
          <Form
            form={form}
            onFinish={handleSubmitForm}
            initialValues={{
              email: ''
            }}
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
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                block
              >
                Сбросить пароль
              </Button>
            </Form.Item>
          </Form>
        </AuthCard>
      </ContentCenter>
    </WithAuthorization>
  )
}
