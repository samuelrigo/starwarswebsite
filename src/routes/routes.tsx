import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/home.page";
import Header from "../components/header/header.component";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
