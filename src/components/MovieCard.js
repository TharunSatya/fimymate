import React from "react";
import { Link } from "react-router-dom";
import ErrorImage from "../assets/images/backup.png";
import Logo from "../assets/logo.png";
export const MovieCard = (props) => {
  const { movie } = props;
  const {
    poster_path,
    overview,
    id,
    original_language,
    original_title,
    release_date,
  } = movie;
  const imagesLink = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const finalImage = poster_path ? imagesLink : ErrorImage;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img className="rounded-t-lg " src={finalImage} alt="" />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <Link to={`/movie/${id}`}>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </Link>
      </div>
    </div>
  );
};
