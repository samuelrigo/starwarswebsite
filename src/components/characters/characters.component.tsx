import { Link } from "react-router-dom";
import "./characters.styles.css";
import useCharacters from "./use-characters.hook";

export const CharactersPage = (props: any) => {
  const { characters, hasCharacters } = useCharacters();

  return (
    <div className="characters__page">
      {props.seeAll !== undefined ? (
        <div className="characters__page__nav__seeAll">
          <h1 className="characters__title"> Characters </h1>
          <div className="seeAll">
            <Link to="/characters" className="characters__seeAll">
              See All
            </Link>
          </div>
        </div>
      ) : (
        <div className="characters__page__nav">
          <h1 className="characters__title"> Characters </h1>
        </div>
      )}

      <ul className="card__list">
        {hasCharacters &&
          characters.map(
            // eslint-disable-next-line array-callback-return
            ({ name, films, species, mass, height, birth_year, homeworld }) => {
              if (name === "Luke Skywalker") {
                return (
                  <div className="card">
                    <div
                      className="card__info card__luke"
                      key={name + Math.random}
                    >
                      <img
                        src="./././images/luke_charcard_mobile.png"
                        alt="Luke card"
                        className="card__luke__img"
                      ></img>
                      <p>
                        <strong> {name}</strong>
                      </p>
                      <p>
                        Films:
                        <strong> {films.join(", ")}</strong>
                      </p>
                      <p>
                        Species:
                        <strong> {species}</strong>
                      </p>
                      <p>
                        Mass:
                        <strong> {mass}</strong>
                      </p>
                      <p>
                        Height:
                        <strong> {height}</strong>
                      </p>
                      <p>
                        Birth Year:
                        <strong> {birth_year}</strong>
                      </p>
                      <p>
                        Homeworld:
                        <strong> {homeworld}</strong>
                      </p>
                    </div>
                  </div>
                );
              } else if (name === "Darth Vader") {
                return (
                  <div className="card">
                    <div
                      className="card__info card__darth"
                      key={name + Math.random}
                    >
                      <p>
                        <strong> {name}</strong>
                      </p>
                    </div>
                  </div>
                );
              } else if (name === "Yoda") {
                return (
                  <div className="card">
                    <div
                      className="card__info card__yoda"
                      key={name + Math.random}
                    >
                      <p>
                        <strong> {name}</strong>
                      </p>
                    </div>
                  </div>
                );
              } else if (name === "Anakin Skywalker") {
                return (
                  <div className="card">
                    <div
                      className="card__info card__anakin"
                      key={name + Math.random}
                    >
                      <p>
                        <strong> {name}</strong>
                      </p>
                    </div>
                  </div>
                );
              }
            }
          )}
      </ul>
    </div>
  );
};
export default CharactersPage;
