import "./header.styles.css";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header">
      <img src="./././images/star_wars_logo.png" alt="Star Wars Logo" />

      <div className="menu__icon">
        <CiMenuBurger />
      </div>

      <div className="nav__menu">
        <Link to="/" className="nav__item">
          Home
        </Link>

        <Link to="/movies" className="nav__item">
          Movies
        </Link>
      </div>
    </header>
  );
};
