import Navigation from "./navigation/navigation.jsx";
import classes from "./header.module.css"
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/header-top-images/Group 1.png"
import logoLight from "../../assets/images/header-top-images/Group 1L.png"
import useIsAlternate from "../../hooks/useAlternatePaths.js";
import { useState } from "react";


const Header = (props) => {

    const location = useLocation()

    const [positionIndicator, setPositionIndicator] = useState(470)
    const alternatePaths = ["/coursesAllPage", "/allEvents", "/news", "/contacts", "/enter", "/test"];
    const isAlternate = useIsAlternate(alternatePaths);

    const contacts = location.pathname === "/contacts";
    const testPage = location.pathname === "/test";

    const handlePositionIndicator = (position) => {
        setPositionIndicator(position)
    }

    return (
        <header className={isAlternate ? classes.headerDark : classes.headerTop}>
            <NavLink to="homepage">
                <img src={isAlternate ? logoLight : logo} alt="" />
            </NavLink>
            <Navigation isAlternate={isAlternate} onIndicatorMove={handlePositionIndicator} />
            {isAlternate && (!contacts && !testPage) ? (<hr className={classes.indicatorHeader}
                style={{ "height": "5px", "left": `${positionIndicator}px` }} />) : null}
        </header >
    )
}

export default Header;