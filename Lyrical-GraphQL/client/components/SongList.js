import React from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import getSongs from "../queries/fetchSongs";

const SongList = () => {
  const { data, loading, error } = useQuery(getSongs);

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <ul className="collection">
        {data.songs.map(song => (
          <li key={song.id} className="collection-item">{song.title}</li>
        ))}
      </ul>
      <Link
        to="/songs/new"
        className="btn-floating btn-large red right"
      >
        <i className="material-icons">add</i>
      </Link>
    </div >
  );
}

export default SongList;
