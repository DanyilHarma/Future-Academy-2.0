import Navigation from "./navigation/navigation";
import classes from "./header.module.css"
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/header-top-images/Group 1.png"
import logoLight from "../../assets/images/header-top-images/Group 1L.png"

const Header = (props) => {

    const location = useLocation();

    const alternatePaths = ["/coursesAllPage"];

    const isAlternate = alternatePaths.includes(location.pathname)

    return (
        <header className={isAlternate ? classes.headerDark : classes.headerTop}>
            <NavLink to="homepage">
                <img src={isAlternate ? logoLight : logo} alt="" />
            </NavLink>
            <Navigation isAlternate={isAlternate} />
        </header >
    )
}

export default Header;