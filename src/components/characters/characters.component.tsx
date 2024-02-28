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
          characters.map(function ({
            name,
            films,
            species,
            mass,
            height,
            birth_year,
            homeworld,
          }) {
            switch (name) {
              case "Luke Skywalker":
                return (
                  <div className="card ">
                    <img
                      src="./././images/luke_charcard_mobile.png"
                      alt="Luke Skywalker"
                      className="card__luke__img"
                    />
                    <div className="card__info__luke " key={name + Math.random}>
                      <p>
                        <strong> {name}</strong>
                      </p>
                      <p>Movies:</p>
                      <strong> {films.join(", ")}</strong>

                      <p>Species:</p>
                      <strong>{species}</strong>

                      <p>Mass:</p>
                      <strong> {mass} Kg</strong>

                      <p>Height:</p>
                      <strong> {height} m</strong>

                      <p>Birth Year: </p>
                      <strong> {birth_year}</strong>

                      <p>Homeworld:</p>
                      <strong> {homeworld}</strong>
                    </div>
                    <div className="card__blankspace"></div>
                  </div>
                );
              case "Darth Vader":
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
              case "Yoda":
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
              case "Anakin Skywalker":
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
              default:
                return null;
            }
          })}
      </ul>
    </div>
  );
};
export default CharactersPage;
