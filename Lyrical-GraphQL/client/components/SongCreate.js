import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";

import GetSongs from "../queries/fetchSongs";
import AddSong from "../queries/addSong";

const SongCreate = () => {
  const [title, setTitle] = useState('');
  const [addSong, { loading, error }] = useMutation(AddSong);
  const navigate = useNavigate();

  if (loading) return <p>Submitting...</p>;
  if (error) return <p>Submission error! {error.message}</p>;

  const onSubmit = (event) => {
    event.preventDefault();
    addSong({
      variables: { title: title },
      refetchQueries: [{ query: GetSongs }]
    });
    navigate("/");
  }

  return (
    <div>
      <Link to="/">Back</Link>
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
