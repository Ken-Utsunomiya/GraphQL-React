import { gql } from '@apollo/client'

const getSongs = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default getSongs;
