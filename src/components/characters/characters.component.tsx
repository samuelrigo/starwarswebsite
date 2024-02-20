import "./characters.styles.css";
import useCharacters from "../home/characters/use-characters.hook";

export const CharactersPage = () => {
	const { characters, hasCharacters } = useCharacters();
	return (
		<div className="characters__page">
			<div className="characters__page__nav">
				<h1> Characters </h1>
			</div>
			<ul className="card__list">
				{hasCharacters &&
					characters.map(
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
export default CharactersPage;
