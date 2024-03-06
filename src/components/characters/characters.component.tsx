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
                  <div
                    className="
                   card__luke"
                  >
                    <img
                      src="./././images/luke_charcard_mobile.png"
                      alt="Luke Skywalker"
                      className="card__luke__img"
                    />
                    <div className="card__info__luke " key={name + Math.random}>
                      <h1>
                        <strong> {name}</strong>
                      </h1>
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
                  </div>
                );
              case "Darth Vader":
                return (
                  <div className="card__darth">
                    <img
                      src="./././images/darth_charcard_mobile.png"
                      alt="Darth Vader"
                      className="card__darth__img"
                    />
                    <div className="card__info__darth" key={name + Math.random}>
                      <h1>
                        <strong> {name}</strong>
                      </h1>
                    </div>
                  </div>
                );
              case "Yoda":
                return (
                  <div className=" card__yoda">
                    <img
                      src="./././images/yoda_charcard_mobile.png"
                      alt="Yoda"
                      className="card__yoda__img"
                    />
                    <div className="card__info__yoda" key={name + Math.random}>
                      <h1>
                        <strong> {name}</strong>
                      </h1>
                    </div>
                  </div>
                );
              case "Anakin Skywalker":
                return (
                  <div className="card__anakin">
                    <img
                      src="./././images/anakin_charcard_mobile.png"
                      alt="Anakin Skywalker"
                      className="card__anakin__img"
                    />
                    <div
                      className="card__info__anakin"
                      key={name + Math.random}
                    >
                      <h1>
                        <strong> {name}</strong>
                      </h1>
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
