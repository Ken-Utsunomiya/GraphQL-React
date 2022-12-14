import React from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import GetSong from "../queries/fetchSong";

const SongDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GetSong, {
    variables: { id: id }
  });

  if (loading) {
    return <div>Loading ...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      {data.song.title}
    </div>
  )
}

export default SongDetail;
