import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { MovieCard } from "../components";
export const MovieListPage = (props) => {
  const { language, title } = props;

  const data = useFetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&region=IN&language=en-IN&release_date.gte=2023-08-01&with_release_type=3%7C2&with_original_language=${language}`
  );
  //https://api.themoviedb.org/3/discover/movie?api_key=3b8842440fc435932c0ce1917b645d9d&region=IN&language=en-IN&release_date.gte=2017-08-01&with_release_type=3%7C2&with_original_language=te

  //`https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}
  useTitle(`${title}`);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {data.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
