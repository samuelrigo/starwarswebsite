import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home.page";
import Movies from "../pages/Movies/movies.page";
import Header from "../components/header/header.component";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/" element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
