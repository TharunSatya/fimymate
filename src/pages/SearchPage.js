import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

import { useSearchParams } from "react-router-dom";
import { MovieCard } from "../components";
export const SearchPage = ({ api }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const data = useFetch(
    `https://api.themoviedb.org/3/${api}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`
  );

  useTitle(`Search results for ${queryTerm}`);
  return (
    <main>
      <section className="flex flex-start py-7">
        <p className="text-gray-700 text-3xl dark:text-white">
          {data.length >= 1
            ? `Results for '${queryTerm}'`
            : `No results found for  '${queryTerm}'`}
        </p>
      </section>

      <section className="max-w-7xl py-7 mx-auto flex flex-wrap">
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
};
