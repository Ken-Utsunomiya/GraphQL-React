import { gql } from '@apollo/client'

const AddSong = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

export default AddSong;