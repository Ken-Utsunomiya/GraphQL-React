import { gql } from '@apollo/client'

const getSongs = gql`
  {
    songs {
      title
    }
  }
`;

export default getSongs;
