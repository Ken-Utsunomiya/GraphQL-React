import React, { useState } from "react";
import { useMutation, gql } from "@apollo/client";

const AddSong = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

const SongCreate = () => {
  const [title, setTitle] = useState('')
  const [addSong, { loading, error }] = useMutation(AddSong);

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Submission error! {error.message}</p>;

  const onSubmit = (event) => {
    event.preventDefault()
    addSong({ variables: { title: title } })
    setTitle('')
  }

  return (
    <div>
      <h3>Create a new song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title:</label>
        <input
          onChange={event => setTitle(event.target.value)}
          value={title}
        />
      </form>
    </div>
  );
}

export default SongCreate;
