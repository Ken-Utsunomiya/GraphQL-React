import React from "react";
import { useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

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
      <Link to="/">Back</Link>
      <h3>{data.song.title}</h3>
      <LyricCreate songId={id} />
      <LyricList lyrics={data.song.lyrics} />
    </div>
  )
}

export default SongDetail;
