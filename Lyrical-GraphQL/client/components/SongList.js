import React from "react";
import { useQuery, gql } from "@apollo/client";

const getSongs = gql`
  {
    songs {
      title
    }
  }
`;

const SongList = () => {
  const { data, loading, error } = useQuery(getSongs);

  console.log("here")

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error</div>
  }

  return (
    <div>
      <ul id="song-list">
        {data.songs.map(song => (
          <li key={song.id}>{song.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default SongList;
