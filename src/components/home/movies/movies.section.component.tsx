import { Link } from "react-router-dom";
import "./movies.section.styles.css";
import useMovies from "../../movies/body/use-movies.hook";

export const MoviesSection = () => {
  const { movies, hasMovies } = useMovies();
  return (
    <div className="movies">
      <div className="movies__nav">
        <h1> Movies </h1>
        <Link to="/movies" className="movies__seeAll">
          See All
        </Link>
      </div>

      <ul>
        {hasMovies &&
          movies.map(({ title, director, release_date, characters }) => {
            return (
              <li key={title}>
                <strong>{title}</strong>
                <p>{director}</p>
                <p>{release_date}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default MoviesSection;
