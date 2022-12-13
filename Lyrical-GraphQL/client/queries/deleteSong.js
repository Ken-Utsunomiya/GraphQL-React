import { gql } from '@apollo/client'

const DeleteSong = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default DeleteSong;
