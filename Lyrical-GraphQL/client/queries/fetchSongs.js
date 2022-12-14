import { gql } from '@apollo/client'

const GetSongs = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default GetSongs;
