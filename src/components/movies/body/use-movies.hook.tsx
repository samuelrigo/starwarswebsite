import { useCallback, useEffect, useState } from "react";

type Movie = {
	title: string;
	director: string;
	release_date: string;
	characters: object;
};

export default function useMovies() {
	const [movies, setMovies] = useState<Movie[]>([]);

	const fetchStarWarsMovies = useCallback(async () => {
		fetch("https://swapi.dev/api/films").then(async (response) => {
			const { results } = await response.json();

			const moviesWithYearOnly = results.map((movie: Movie) => ({
				...movie,
				release_date: movie.release_date.split("-")[0],
			}));

			setMovies(moviesWithYearOnly);
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
