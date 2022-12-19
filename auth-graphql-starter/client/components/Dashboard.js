import React from 'react'
import RequireAuth from './RequireAuth'

const Dashboard = () => {
  return (
    <div>You are logged in</div>
  )
}

export default RequireAuth(Dashboard)
