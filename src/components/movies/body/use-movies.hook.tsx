import { useCallback, useEffect, useState } from "react";

type Movie = {
  title: string;
  episode_id: number;
  opening_crawl: string;
};

export default function useMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const fetchStarWarsMovies = useCallback(async () => {
    fetch("https://swapi.dev/api/films").then(async (response) => {
      const { results } = await response.json();
      setMovies(results);
    });
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    fetchStarWarsMovies();

    return () => controller.abort();
  }, [fetchStarWarsMovies]);

  const hasMovies = movies.length > 0;

  return {
    movies,
    hasMovies,
  };
}