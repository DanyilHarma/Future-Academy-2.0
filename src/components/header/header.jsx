import Navigation from "./navigation/navigation";
import classes from "./header.module.css"
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/header-top-images/Group 1.png"
import logoLight from "../../assets/images/header-top-images/Group 1L.png"
import useIsAlternate from "../../hooks/useAlternatePaths";

const Header = (props) => {

    const alternatePaths = ["/coursesAllPage"];

    const isAlternate = useIsAlternate(alternatePaths);

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