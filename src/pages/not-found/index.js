import React from 'react'

import { Link } from 'react-router-dom'
import { Result, Button } from 'antd'

import { ContentCenter } from '@ui'

export const NotFoundPage = () => {
  return (
    <ContentCenter>
      <Result
        status="404"
        title="404"
        subTitle="Извините, страницы которую вы запрашиваете, не существует :("
        extra={
          <Link to="/">
            <Button type="primary">Вернуться на главную страницу</Button>
          </Link>
        }
      />
    </ContentCenter>
  )
}
