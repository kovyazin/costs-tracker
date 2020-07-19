import React from 'react'

import { MainTemplate } from '@ui'
import { Header, WithAuthorization } from '@features/common'

export const HomePage = () => {
  return (
    <WithAuthorization type="authenticated">
      <MainTemplate header={<Header />} footer={<p>Footer</p>}>
        Hello world!
      </MainTemplate>
    </WithAuthorization>
  )
}
