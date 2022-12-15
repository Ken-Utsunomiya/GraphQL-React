import { gql } from '@apollo/client';

const LikeLyric = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default LikeLyric;
