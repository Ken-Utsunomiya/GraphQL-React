import { gql } from '@apollo/client'

const LOGOUT = gql`
  mutation {
    logout {
      id
      email
    }
  }
`

export default LOGOUT
