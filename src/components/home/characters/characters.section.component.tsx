import { Link } from "react-router-dom";
import "./characters.section.styles.css";
import useCharacters from "./use-characters.hook";

export const CharactersSection = () => {
  const { characters, hasCharacters } = useCharacters();

  const firstFiveCharacters = hasCharacters ? characters.slice(0, 5) : [];

  return (
    <div className="characters">
      <div className="characters__nav">
        <h1> Characters </h1>

        <Link to="/characters" className="characters__seeAll">
          See All
        </Link>
      </div>
      <ul>
        {firstFiveCharacters.map(
          ({ name, films, species, mass, height, birth_year, homeworld }) => {
            return (
              <li key={name + Math.random}>
                <strong>{name}</strong>
                <p>Films: {films.join(", ")}</p>
                <p>Species: {species}</p>
                <p>Mass: {mass}</p>
                <p>Height: {height}</p>
                <p>Birth Year: {birth_year}</p>
                <p>Homeworld: {homeworld}</p>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
export default CharactersSection;
