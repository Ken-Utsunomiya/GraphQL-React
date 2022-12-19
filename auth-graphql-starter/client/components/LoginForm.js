import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FETCH_CURRENT_USER from '../queries/CurrentUser'

import LOGIN from '../mutations/Login'
import AuthForm from './AuthForm'

const LoginForm = () => {
  const [errors, setErrors] = useState([])
  const [login] = useMutation(LOGIN)
  const navigate = useNavigate()

  const onSubmit = ({ email, password }) => {
    login({
      variables: { email, password },
      refetchQueries: [{ query: FETCH_CURRENT_USER }],
      awaitRefetchQueries: true
    })
      .then(() => navigate('/'))
      .catch((res) => {
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
