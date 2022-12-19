import { useMutation } from '@apollo/client'
import React, { useState } from 'react'
import FETCH_CURRENT_USER from '../queries/CurrentUser'

import SIGNUP from '../mutations/Signup'
import AuthForm from './AuthForm'

const SignupForm = () => {
  const [errors, setErrors] = useState([])
  const [signup] = useMutation(SIGNUP)

  const onSubmit = ({ email, password }) => {
    signup({
      variables: { email, password },
      refetchQueries: [{ query: FETCH_CURRENT_USER }],
      awaitRefetchQueries: true
    }).catch((res) => {
      setErrors(res.graphQLErrors.map(err => err.message))
    })
  }

  return (
    <div className='container'>
      <h3>Sign Up</h3>
      <AuthForm
        errors={errors}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default SignupForm
