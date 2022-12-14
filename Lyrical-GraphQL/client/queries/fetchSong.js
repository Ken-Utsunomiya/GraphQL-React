import { gql } from '@apollo/client'

const GetSong = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      id
      title
    }
  }
`;

export default GetSong;
