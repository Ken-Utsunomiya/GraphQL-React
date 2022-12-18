import { useMutation } from '@apollo/client'
import React from 'react'

import LOGIN from '../queries/Login'
import AuthForm from './AuthForm'

const LoginForm = () => {
  const [login] = useMutation(LOGIN)

  const onSubmit = ({ email, password }) => {
    login({
      variables: { email, password }
    })
  }

  return (
    <div className='container'>
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit} />
    </div>
  )
}

export default LoginForm
