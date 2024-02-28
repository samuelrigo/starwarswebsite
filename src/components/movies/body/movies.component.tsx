import { Link } from "react-router-dom";
import "./movies.styles.css";
import useMovies from "./use-movies.hook";

export const MoviesPage = (props: any) => {
  const { movies, hasMovies } = useMovies();
  const firstThreeMovies = movies.slice(0, 3);
  return (
    <div className="movies">
      {props.seeAll !== undefined ? (
        <div className="movies__nav__seeAll">
          <h1> Movies </h1>
          <Link to="/movies" className="movies__seeAll">
            See All
          </Link>
        </div>
      ) : (
        <div className="movies__page__nav">
          <h1> Movies </h1>
        </div>
      )}

      <ul className="movie__list">
        {hasMovies &&
          firstThreeMovies.map(
            ({ title, director, release_date, characters }) => {
              switch (title) {
                case "A New Hope":
                  return (
                    <div className="movie__card" key={title}>
                      <img
                        src="./././images/movies/newhope.png"
                        alt="A New Hope"
                        className="movie__img"
                      />
                      <div className="movie__info">
                        <h1>{title}</h1>
                        <p>
                          {director} - {release_date}
                        </p>
                      </div>
                    </div>
                  );
                case "The Empire Strikes Back":
                  return (
                    <div className="movie__card" key={title}>
                      <img
                        src="./././images/movies/theempirestrikesback.png"
                        alt="The Empire Strikes Back"
                        className="movie__img"
                      />
                      <div className="movie__info">
                        <h1>{title}</h1>
                        <p>
                          {director} - {release_date}
                        </p>
                      </div>
                    </div>
                  );
                case "Return of the Jedi":
                  return (
                    <div className="movie__card" key={title}>
                      <img
                        src="./././images/movies/returnofjedi.png"
                        alt="Return of the Jedi"
                        className="movie__img"
                      />
                      <div className="movie__info">
                        <h1>{title}</h1>
                        <p>
                          {director} - {release_date}
                        </p>
                      </div>
                    </div>
                  );
                default:
                  return null;
              }
            }
          )}
      </ul>
    </div>
  );
};
export default MoviesPage;
