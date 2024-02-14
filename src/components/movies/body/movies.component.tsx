import "./movies.styles.css";
import useMovies from "./use-movies.hook";

export const MoviesBody = () => {
  const { movies, hasMovies } = useMovies();
  return (
    <div className="body">
      <video
        className="star__video"
        autoPlay
        disablePictureInPicture
        muted
        loop
      >
        <source
          src="./././videos/slow_star_video.mp4"
          type="video/mp4"
        ></source>
      </video>

      <ul>
        {hasMovies &&
          movies.map(({ title, episode_id, opening_crawl }) => {
            return (
              <li key={title}>
                <strong>{title}</strong>
                <p>{episode_id}</p>
                <p>{opening_crawl}</p>
                <button>Characters</button>
                <button>Planets</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default MoviesBody;