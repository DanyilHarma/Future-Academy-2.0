import Navigation from "./navigation/navigation.jsx";
import classes from "./header.module.css"
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/header-top-images/Group 1.png"
import logoLight from "../../assets/images/header-top-images/Group 1L.png"
import useIsAlternate from "../../hooks/useAlternatePaths.js";
import { useState } from "react";


const Header = (props) => {

    const [positionIndicator, setPositionIndicator] = useState(480)
    const alternatePaths = ["/coursesAllPage", "/allEvents"];
    const isAlternate = useIsAlternate(alternatePaths);

    const handlePisitionIndicator = (position) => {
        setPositionIndicator(position)
    }

    return (
        <header className={isAlternate ? classes.headerDark : classes.headerTop}>
            <NavLink to="homepage">
                <img src={isAlternate ? logoLight : logo} alt="" />
            </NavLink>
            <Navigation isAlternate={isAlternate} onIndicatorMove={handlePisitionIndicator} />
            {isAlternate ? (<hr className={classes.indicatorHeader}
                style={{ "height": "5px", "left": `${positionIndicator}px` }} />) : null}
        </header >
    )
}

export default Header;