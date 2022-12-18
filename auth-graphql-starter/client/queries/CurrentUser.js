import { gql } from '@apollo/client'

const FETCH_CURRENT_USER = gql`
  {
    user {
      id
      email
    }
  }
`

export default FETCH_CURRENT_USER
