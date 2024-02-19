import { useCallback, useEffect, useState } from "react";
import axios from "axios";

type Character = {
  name: string;
  films: string[];
  species: string[];
  mass: string;
  height: string;
  birth_year: string;
  homeworld: string;
};

export default function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchFilmData = useCallback(async (filmLinks: string[]) => {
    try {
      const filmsData = await Promise.all(
        filmLinks.map(async (link) => {
          const response = await axios.get(link);
          return response.data.title;
        })
      );

      return filmsData;
    } catch (error) {
      console.error("Erro ao buscar dados dos filmes:", error);
      throw error;
    }
  }, []);

  const fetchSpeciesData = useCallback(async (speciesLinks: string[]) => {
    try {
      const speciesData = await Promise.all(
        speciesLinks.map(async (link) => {
          const response = await axios.get(link);
          return response.data.name;
        })
      );

      return speciesData.length > 0 ? speciesData : ["Human"];
    } catch (error) {
      console.error("Erro ao buscar dados das espécies:", error);
      throw error;
    }
  }, []);

  const fetchHomeWorldData = useCallback(async (HomeWorldLinks: string) => {
    try {
      const response = await axios.get(HomeWorldLinks);
      return response.data.name;
    } catch (error) {
      console.error("Erro ao buscar dados dos planetas:", error);
      throw error;
    }
  }, []);

  const fetchStarWarsCharacters = useCallback(async () => {
    try {
      const charactersData = [];

      for (let index = 1; index <= 9; index++) {
        const response = await axios.get(
          `https://swapi.dev/api/people/?page=${index}`
        );
        charactersData.push(...response.data.results);
      }

      for (const character of charactersData) {
        const filmsData = await fetchFilmData(character.films);
        const speciesData = await fetchSpeciesData(character.species);
        const homeWorldData = await fetchHomeWorldData(character.homeworld);

        character.films = filmsData;
        character.species = speciesData;
        character.homeworld = homeWorldData;
      }

      setCharacters(charactersData);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }, [fetchFilmData, fetchSpeciesData, fetchHomeWorldData]);

  useEffect(() => {
    const controller = new AbortController();

    fetchStarWarsCharacters();

    return () => controller.abort();
  }, [fetchStarWarsCharacters]);

  const hasCharacters = characters.length > 0;

  return {
    characters,
    hasCharacters,
  };
}
