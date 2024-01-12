import { Routes, Route } from "react-router-dom";

import {
  MovieDetails,
  MovieListPage,
  PageNotFound,
  SearchPage,
} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
      <Routes>
        <Route
          path="/"
          element={
            <MovieListPage
              api={"movie/telugu"}
              language="te"
              title="Tharun Filmymate"
            />
          }
        />
        <Route
          path="/movies/hindi"
          element={
            <MovieListPage
              api={"movie/hindi"}
              language="hi"
              title="Hindi Filmymate"
            />
          }
        />
        <Route
          path="/movies/tamil"
          element={
            <MovieListPage
              api={"movie/top_rated"}
              language="ta"
              title="Tamil Filmymate"
            />
          }
        />
        <Route
          path="/movies/english"
          element={
            <MovieListPage
              api={"movie/upcoming"}
              language="en"
              title="English Filmymate"
            />
          }
        />
        <Route path="/" element={<MovieListPage />} />
        <Route path="/Movie/:id" element={<MovieDetails />} />
        <Route path="/MovieListPage" element={<MovieListPage />} />
        <Route path="/Search" element={<SearchPage api={"search/movie"} />} />

        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound title="Page Not Found" />} />
      </Routes>
    </div>
  );
};
