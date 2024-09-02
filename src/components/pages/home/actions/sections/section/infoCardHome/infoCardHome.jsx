import classes from "./infoCardHome.module.css"
import ShadowContainer from "../shadowContainer/shadowContainer.jsx";
import { NavLink } from "react-router-dom";


const InfoCardsHome = (props) => {
    return (

        <ShadowContainer style={{ width: "100%", maxWidth: "320px", height: "100%", maxHeight: "220px" }}>
            <NavLink to={props.link} className={classes.section} style={{ backgroundColor: props.backgroundColor }}>
                <img src={props.src} alt="" />
                <h4>{props.title}</h4>
            </NavLink>
        </ShadowContainer>

    )
}

export default InfoCardsHome;