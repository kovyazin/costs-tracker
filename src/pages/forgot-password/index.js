import React from 'react'

import { Form, Input, Button } from 'antd'
import { MailOutlined } from '@ant-design/icons'

import { AuthCard } from '@features/auth'
import { ContentCenter } from '@ui'

export const ForgotPasswordPage = () => {
  return (
    <ContentCenter>
      <AuthCard title="Восстановление пароля">
        <Form size="large">
          <Form.Item>
            <Input prefix={<MailOutlined />} placeholder="Введите ваш email" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Сбросить пароль
            </Button>
          </Form.Item>
        </Form>
      </AuthCard>
    </ContentCenter>
  )
}
