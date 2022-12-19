import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { Link } from 'react-router-dom'

import FETCH_CURRENT_USER from '../queries/CurrentUser'
import LOGOUT from '../mutations/Logout'

const Header = () => {
  const { data, loading, error } = useQuery(FETCH_CURRENT_USER)
  const [logout] = useMutation(LOGOUT)

  const onLogoutClick = () => {
    logout({
      refetchQueries: [{ query: FETCH_CURRENT_USER }]
    })
  }

  const renderButtons = () => {
    if (loading) { return <div /> }
    if (error) { return <p>ERROR: {error.message}</p> }

    const { user } = data
    if (user) {
      return (
        <li>
          <a onClick={onLogoutClick}>Logout</a>
        </li>
      )
    } else {
      return (
        <div>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </div>
      )
    }
  }

  return (
    <nav>
      <div className='nav-wrapper blue'>
        <Link to="/" className='brand-logo left'>Home</Link>
        <ul className='right'>
          {renderButtons()}
        </ul>
      </div>
    </nav>
  )
}

export default Header
