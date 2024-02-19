import { useCallback, useEffect, useState } from "react";
import axios from "axios";

type Character = {
  name: string;
  films: string[];
  species: string;
  mass: string;
  height: string;
  birth_year: string;
  homeworld: string;
};

export default function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchStarWarsCharacters = useCallback(async () => {
    for (let index = 1; index <= 9; index++) {
      await axios
        .get(`https://swapi.dev/api/people/?page=${index}`)
        .then((res) => setCharacters(res.data.results))
        .catch((err) => {
          setError(err.message);
        });
    }
  }, []);

  const fetchCharMovies = useCallback(() => {
    const fetchFilmData = async () => {
      try {
        const updatedCharacters = await Promise.all(
          characters.map(async (character) => {
            if (character.films) {
              const filmDataPromises = character.films.map(async (filmUrl) => {
                const response = await axios.get(filmUrl);
                return response.data.title;
              });

              const filmData = await Promise.all(filmDataPromises);

              return {
                ...character,
                films: filmData,
              };
            }

            return character;
          })
        );

        setCharacters(updatedCharacters);
      } catch (error) {
        console.error(
          "Ocorreu um erro ao buscar informações dos filmes:",
          error
        );
      }
    };

    fetchFilmData();
  }, [characters]);

  useEffect(() => {
    const controller = new AbortController();

    fetchStarWarsCharacters();
    fetchCharMovies();

    return () => controller.abort();
  }, [fetchStarWarsCharacters, fetchCharMovies]);

  function setError(message: any) {
    throw new Error("Couldn't fetch data");
  }

  const hasCharacters = characters.length > 0;

  return {
    characters,
    hasCharacters,
  };
}
