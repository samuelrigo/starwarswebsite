import { Link } from "react-router-dom";
import "./characters.section.styles.css";

export const CharactersSection = () => {
  return (
    <div className="characters">
      <h1> Characters </h1>
      <Link to="/characters" className="characters__seeAll">
        See All
      </Link>
    </div>
  );
};
export default CharactersSection;
