import React, { useState } from 'react'

const AuthForm = ({ errors, onSubmit }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onFormSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <div className='row'>
      <form className='col s7' onSubmit={onFormSubmit}>
        <div className='input-field'>
          <input
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='input-field'>
          <input
            placeholder='Password'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='errors'>
          {errors.map(err => <div key={err}>{err}</div>)}
        </div>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default AuthForm
