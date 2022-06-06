import React, { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetail(json.data.movie);
    console.log(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="movie_list_outer">
      <MovieDetail
        medium_cover_image={detail.medium_cover_image}
        title={detail.title}
        rating={detail.rating}
        runtime={detail.runtime}
        genres={detail.genres}
        description_full={detail.description_full}
        year={detail.year}
      />
    </div>
  );
}

export default Detail;
