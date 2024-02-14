import { CharactersSection } from "../../components/home/characters/characters.section.component";
import { FrontPage } from "../../components/home/frontpage/frontpage.component";
import { MoviesSection } from "../../components/home/movies/movies.section.component";

export const Home = () => {
  return (
    <div>
      <FrontPage />
      <CharactersSection />
      <MoviesSection />
    </div>
  );
};
export default Home;
