import { paths } from './paths'

import { HomePage } from './home'
import { NotFoundPage } from './not-found'
import { SignInPage } from './sign-in'
import { SignUpPage } from './sign-up'
import { ForgotPasswordPage } from './forgot-password'

export const routes = [
  {
    path: paths.home(),
    exact: true,
    component: HomePage
  },
  {
    path: paths.signIn(),
    exact: true,
    component: SignInPage
  },
  {
    path: paths.signUp(),
    exact: true,
    component: SignUpPage
  },
  {
    path: paths.forgotPassword(),
    exact: true,
    component: ForgotPasswordPage
  },
  {
    path: '*',
    component: NotFoundPage
  }
]