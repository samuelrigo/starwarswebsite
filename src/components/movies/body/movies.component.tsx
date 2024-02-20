import "./movies.styles.css";
import useMovies from "./use-movies.hook";

export const MoviesPage = () => {
	const { movies, hasMovies } = useMovies();
	return (
		<div className="movies">
			<div className="movies__page__nav">
				<h1> Movies </h1>
			</div>

			<ul className="movie__list">
				{hasMovies &&
					movies.map(({ title, director, release_date, characters }) => {
						return (
							<div className="movie__card" key={title}>
								<strong>{title}</strong>
								<p>
									{director} - {release_date}
								</p>
							</div>
						);
					})}
			</ul>
		</div>
	);
};
export default MoviesPage;
