import { gql } from '@apollo/client'

const SIGNUP = gql`
  mutation Signup($email: String, $password: String){
    signup(email: $email, password: $password) {
      id
      email
    }
  }
`

export default SIGNUP
