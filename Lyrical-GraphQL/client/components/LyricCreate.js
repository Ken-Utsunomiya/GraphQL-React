import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import AddLyric from "../queries/addLyric";

const LyricCreate = ({ songId }) => {
  const [content, setContent] = useState('')
  const [addLyricToSong, { error }] = useMutation(AddLyric)

  if (error) {
    return <div>Error</div>;
  }

  const onSubmit = (event) => {
    event.preventDefault()
    addLyricToSong({
      variables: {
        content: content,
        songId: songId
      }
    })
    setContent('')
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Add a Lyric</label>
      <input
        value={content}
        onChange={event => setContent(event.target.value)}
      />
    </form>
  )
}

export default LyricCreate;
