import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import BackupImage from "../assets/images/backup.png";
export const MovieDetails = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const image = `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`;
  useEffect(() => {
    const FetchMovieDetails = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=3b8842440fc435932c0ce1917b645d9d`
      );
      const jsonData = await response.json();
      setMovieInfo(jsonData);
    };
    FetchMovieDetails();
  }, [id]);
  const finalImageOutPut = image ? image : BackupImage;

  const { genres } = movieInfo;

  useEffect(() => {
    document.title = `${movieInfo.title}`;
  });
  return (
    <main>
      <section className="flex justify-around flex-wrap py-5 ">
        <div className="max-w-sm ">
          <img
            src={finalImageOutPut}
            className="rounded"
            alt={movieInfo.title}
          />
        </div>
        <div className="max-w-2xl text-lg text-gray-700 dark:text-white ">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movieInfo.title}
          </h1>
          <p className="my-4 lg:text-left">{movieInfo.overview}</p>
          <p className="my-7 flex flex-wrap gap-2">
            {genres
              ? genres.map((eachItem) => (
                  <span
                    key={eachItem.id}
                    className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                  >
                    {eachItem.name}
                  </span>
                ))
              : "hero"}
          </p>

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">
              {movieInfo.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-sm font-medium text-gray-900  hover:no-underline dark:text-white">
              {movieInfo.vote_count} reviews
            </span>
          </div>
          <p className="my-4 text-start">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movieInfo.runtime} min.</span>
          </p>

          <p className="my-4 text-start">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movieInfo.budget}</span>
          </p>

          <p className="my-4 text-start">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movieInfo.revenue}</span>
          </p>

          <p className="my-4 text-start">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movieInfo.release_date}</span>
          </p>

          <p className="my-4 text-start">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              className="underline text-blue-800"
              href={`https://www.imdb.com/title/${movieInfo.imdb_id}`}
              target="_blank"
              rel="noreferrer"
            >
              {movieInfo.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
