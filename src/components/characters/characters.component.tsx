import { Link } from "react-router-dom";
import "./characters.styles.css";
import useCharacters from "./use-characters.hook";
import { useRef, useState } from "react";

export const CharactersPage = (props: any) => {
  const { characters, hasCharacters } = useCharacters();
  const charRef = useRef<any>();
  const [visibleChar, setVisibleChar] = useState<string | null>(null);

  const showCharInfo = (name: string) => {
    setVisibleChar(name);
  };

  const hideCharInfo = () => {
    setVisibleChar(null);
  };

  return (
    <div className="characters__page">
      {props.seeAll ? (
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
      {props.seeAll ? (
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
                        src="./././images/mobile/luke_charcard_mobile.png"
                        alt="Luke Skywalker"
                        className="card__luke__img__mobile"
                      />
                      <img
                        src="./././images/tablet/luke_charcard_tablet.png"
                        alt="Luke Skywalker"
                        className="card__luke__img__tablet"
                      />
                      <img
                        src="./././images/desktop/luke_charcard_desktop.png"
                        alt="Luke Skywalker"
                        className="card__luke__img__desktop"
                      />
                      <div
                        className="card__info__luke "
                        key={name + Math.random}
                      >
                        <div className="card__info__title__luke">
                          <h1>
                            <strong> {name}</strong>
                          </h1>
                        </div>

                        <div className="card__info__movies__luke">
                          <p>Movies:</p>
                          <strong> {films.join(", ")}</strong>
                        </div>
                        <div className="card__info__details__luke">
                          <div className="card__info__secundary__luke">
                            <p>Species:</p>
                            <strong>{species}</strong>
                          </div>
                          <div className="card__info__secundary__luke">
                            <p>Mass:</p>
                            <strong> {mass} Kg</strong>
                          </div>
                          <div className="card__info__secundary__luke">
                            <p>Height:</p>
                            <strong> {height} m</strong>
                          </div>
                          <div className="card__info__secundary__luke">
                            <p>Birth Year: </p>
                            <strong> {birth_year}</strong>
                          </div>
                          <div className="card__info__secundary__luke">
                            <p>Homeworld:</p>
                            <strong> {homeworld}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                case "Darth Vader":
                  return (
                    <div className="card__darth">
                      <img
                        src="./././images/mobile/darth_charcard_mobile.png"
                        alt="Darth Vader"
                        className="card__darth__img__mobile"
                      />
                      <img
                        src="./././images/tablet/darth_charcard_tablet.png"
                        alt="Darth Vader"
                        className="card__darth__img__tablet"
                      />
                      <img
                        src="./././images/desktop/darth_charcard_desktop.png"
                        alt="Darth Vader"
                        className="card__darth__img__desktop"
                      />
                      <div
                        className="card__info__darth"
                        key={name + Math.random}
                      >
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
                        src="./././images/mobile/yoda_charcard_mobile.png"
                        alt="Yoda"
                        className="card__yoda__img__mobile"
                      />
                      <img
                        src="./././images/tablet/yoda_charcard_tablet.png"
                        alt="Yoda"
                        className="card__yoda__img__tablet"
                      />
                      <img
                        src="./././images/desktop/yoda_charcard_desktop.png"
                        alt="Yoda"
                        className="card__yoda__img__desktop"
                      />
                      <div
                        className="card__info__yoda"
                        key={name + Math.random}
                      >
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
                        src="./././images/mobile/anakin_charcard_mobile.png"
                        alt="Anakin Skywalker"
                        className="card__anakin__img__mobile"
                      />
                      <img
                        src="./././images/tablet/anakin_charcard_tablet.png"
                        alt="Anakin Skywalker"
                        className="card__anakin__img__tablet"
                      />
                      <img
                        src="./././images/desktop/anakin_charcard_desktop.png"
                        alt="Anakin Skywalker"
                        className="card__anakin__img__desktop"
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
      ) : (
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
              return (
                <div className="card" key={name + Math.random}>
                  <div className="card__characters__title">
                    <h1>
                      <strong> {name}</strong>
                    </h1>
                    {visibleChar !== name && (
                      <button
                        className="card__character__button"
                        onClick={() => showCharInfo(name)}
                      >
                        <img
                          src="./././images/arrow_down_icon.png"
                          alt="Arrow down button"
                        ></img>
                      </button>
                    )}
                    {visibleChar === name && (
                      <button
                        className="card__character__button"
                        onClick={hideCharInfo}
                      >
                        <img
                          src="./././images/arrow_up_icon.png"
                          alt="Arrow up button"
                        ></img>
                      </button>
                    )}
                  </div>

                  {visibleChar === name && (
                    <div className="hidden__char__info">
                      {
                        <div className="shown__char__info">
                          <div className="card__info__movies">
                            <p>Movies:</p>
                            <strong> {films.join(", ")}</strong>
                          </div>
                          <div className="card__info__details">
                            <div className="card__info__secundary">
                              <p>Species:</p>
                              <strong>{species}</strong>
                            </div>
                            <div className="card__info__secundary">
                              <p>Mass:</p>
                              <strong> {mass} Kg</strong>
                            </div>
                            <div className="card__info__secundary">
                              <p>Height:</p>
                              <strong> {height} m</strong>
                            </div>
                            <div className="card__info__secundary">
                              <p>Birth Year: </p>
                              <strong> {birth_year}</strong>
                            </div>
                            <div className="card__info__secundary">
                              <p>Homeworld:</p>
                              <strong> {homeworld}</strong>
                            </div>
                          </div>
                        </div>
                      }
                    </div>
                  )}
                </div>
              );
            })}
        </ul>
      )}
    </div>
  );
};
export default CharactersPage;
