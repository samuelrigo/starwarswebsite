import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home.page";
import Header from "../components/header/header.component";
import Characters from "../pages/Characters/characters.page";
import Movies from "../pages/Movies/movies.page";

export const Router = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/characters" element={<Characters />} />
				<Route path="/movies" element={<Movies />} />
			</Routes>
		</BrowserRouter>
	);
};
export default Router;
