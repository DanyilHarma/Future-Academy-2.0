import Navigation from "./navigation/navigation.jsx";
import classes from "./header.module.css"
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/header-top-images/Group 1.png"
import logoLight from "../../assets/images/header-top-images/Group 1L.png"
import useIsAlternate from "../../hooks/useAlternatePaths.js";
import { useState } from "react";


const Header = (props) => {

    const [positionIndicator, setPositionIndicator] = useState(470)
    const alternatePaths = ["/coursesAllPage", "/allEvents", "/news"];
    const isAlternate = useIsAlternate(alternatePaths);

    const handlePositionIndicator = (position) => {
        setPositionIndicator(position)
    }

    return (
        <header className={isAlternate ? classes.headerDark : classes.headerTop}>
            <NavLink to="homepage">
                <img src={isAlternate ? logoLight : logo} alt="" />
            </NavLink>
            <Navigation isAlternate={isAlternate} onIndicatorMove={handlePositionIndicator} />
            {isAlternate ? (<hr className={classes.indicatorHeader}
                style={{ "height": "5px", "left": `${positionIndicator}px` }} />) : null}
        </header >
    )
}

export default Header;