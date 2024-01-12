import  { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data.results);
    };
    fetchMovies();
  }, [url]);
  return data;
};
