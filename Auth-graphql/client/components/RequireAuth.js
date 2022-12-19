import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import FETCH_CURRENT_USER from '../queries/CurrentUser'

const RequireAuth = BaseComponent => () => {
  const { data, loading } = useQuery(FETCH_CURRENT_USER)
  const navigate = useNavigate()

  useEffect(() => {
    if (!loading && !data?.user) {
      navigate('/login')
    }
  })

  return <BaseComponent />
}

export default RequireAuth
