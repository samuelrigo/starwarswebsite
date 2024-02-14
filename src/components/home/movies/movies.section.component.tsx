import { Link } from "react-router-dom";
import "./movies.section.styles.css";
export const MoviesSection = () => {
  return (
    <div className="movies">
      <h1> Movies </h1>
      <Link to="/movies" className="movies__seeAll">
        See All
      </Link>
    </div>
  );
};
export default MoviesSection;
