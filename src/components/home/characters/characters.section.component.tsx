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
			<ul className="card__list">
				{firstFiveCharacters.map(
					({ name, films, species, mass, height, birth_year, homeworld }) => {
						return (
							<div className="card">
								<div className="card__info" key={name + Math.random}>
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
					}
				)}
			</ul>
		</div>
	);
};
export default CharactersSection;
