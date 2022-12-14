import "../style/style.css"
import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

import GetSongs from "../queries/fetchSongs";
import DeleteSong from "../queries/deleteSong";

const SongList = () => {
  const { data: get_data, loading: get_loading, error: get_error } = useQuery(GetSongs);
  const [deleteSong, { loading: del_loading, error: del_error }] = useMutation(DeleteSong);

  if (get_loading | del_loading) {
    return <div>Loading ...</div>;
  }
  if (get_error | del_error) {
    return <div>Error</div>;
  }

  const onSongDelete = (id) => {
    deleteSong({
      variables: { id: id },
      refetchQueries: [{ query: GetSongs }]
    })
  }

  return (
    <div>
      <ul className="collection">
        {get_data.songs.map(({ id, title }) => (
          <li key={id} className="collection-item">
            <Link to={`songs/${id}`}>
              {title}
            </Link>
            <i
              className="material-icons"
              onClick={() => onSongDelete(id)}
            >
              delete
            </i>
          </li>
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
