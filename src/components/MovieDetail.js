import React from "react";
import PropTypes from "prop-types";

function MovieDetail({
  medium_cover_image,
  title,
  rating,
  runtime,
  genres,
  description_full,
  year,
}) {
  return (
    <div className="detail">
      <img src={medium_cover_image} alt={title} />
      <h2>{title}</h2>
      <p>
        Rating: <b>{rating}</b> / 9.9
      </p>
      <p>Release: {year}</p>
      <p>Runtime: {runtime}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
      <div>{description_full}</div>
    </div>
  );
}

MovieDetail.propTypes = {
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  description_full: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default MovieDetail;
