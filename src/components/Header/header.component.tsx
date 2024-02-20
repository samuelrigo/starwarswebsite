import "./header.styles.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

export const Header = () => {
  const navRef = useRef<any>();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive__nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive__nav");
  };

  return (
    <header className="header">
      <button className="nav__btn" onClick={showNavBar}>
        <img src="./././images/icon-button.svg" alt="Menu button" />
      </button>

      <Link to="/">
        <img
          src="./././images/star_wars_logo.svg"
          alt="Star Wars Logo"
          className="header__logo"
        />
      </Link>

      <img
        src="./././images/x__icon.svg"
        alt="X button"
        className="invisible__button"
      />

      <nav className="nav__menu" ref={navRef}>
        <Link to="/" onClick={hideNavbar} className="nav__item">
          <img
            src="./././images/characters__icon.svg"
            alt="Characters Icon"
          ></img>
          <p>Characters</p>
        </Link>

        <Link to="/movies" onClick={hideNavbar} className="nav__item">
          <img src="./././images/movies__icon.svg" alt="Movies Icon"></img>
          <p>Movies</p>
        </Link>
        <button className="nav__btn nav__close__btn" onClick={showNavBar}>
          <img src="./././images/x__icon.svg" alt="X button" />
        </button>
      </nav>
    </header>
  );
};
export default Header;
