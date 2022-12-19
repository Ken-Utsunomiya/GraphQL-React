import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import FETCH_CURRENT_USER from '../queries/CurrentUser'

import LOGIN from '../queries/Login'
import AuthForm from './AuthForm'

const LoginForm = () => {
  const [errors, setErrors] = useState([])
  const [login] = useMutation(LOGIN)

  const onSubmit = ({ email, password }) => {
    login({
      variables: { email, password },
      refetchQueries: [{ query: FETCH_CURRENT_USER }],
      awaitRefetchQueries: true
    }).catch((res) => {
      setErrors(res.graphQLErrors.map(err => err.message))
    })
  }

  return (
    <div className='container'>
      <h3>Login</h3>
      <AuthForm
        errors={errors}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default LoginForm
