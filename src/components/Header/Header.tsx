import './Header.css'
import { IconContext } from "react-icons";
import { CiMenuBurger } from "react-icons/ci";;
export const Header = () => {
    return(
			<header className='header'>
				<img src="./././images/star_wars_logo.png" alt="Star Wars Logo" />
					<IconContext.Provider value={{size: "2.5em", color: 'yellow'}}>
						<div className='menu__icon'>
							<CiMenuBurger />
                        </div>
        	        </IconContext.Provider>
            <ul className='nav__menu'>
                <a href='/home' className='nav__item'><li >Home</li></a>
                <a href='/movies' className='nav__item'><li >Movies</li></a>
            </ul>
    </header>
   )
}