import "../style/style.css";
import React from "react";
import { useMutation } from "@apollo/client";

import LikeLyric from "../queries/likeLyric";

const LyricList = ({ lyrics }) => {
  const [likeLyric, { error }] = useMutation(LikeLyric)

  if (error) {
    return <p>Error</p>
  }

  const onLike = (id, likes) => {
    likeLyric({
      variables: { id: id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: id,
          __typename: 'LyricType',
          likes: likes + 1
        }
      }
    })
  }

  return (
    <ul className="collection">
      {lyrics.map(({ id, content, likes }) => (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={() => onLike(id, likes)}
            >
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default LyricList;
