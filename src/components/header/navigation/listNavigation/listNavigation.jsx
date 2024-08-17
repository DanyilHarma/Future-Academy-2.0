import { NavLink } from "react-router-dom";
import classes from "./listNvigation.module.css"



const ListNav = (props) => {

    const { darkImage, lightImage } = props.imgSrc || {};

    return (
        <div>
            <li>
                <NavLink to={props.link}>
                    {props.imgSrc && <img src={props.isAlternate ? lightImage : darkImage} alt={props.text} />}{props.text}
                    {props.imgSrcSecond && <img src={props.isAlternate ? lightImage : darkImage} alt={props.text} />}
                </NavLink>
            </li>
        </div>
    )
}

export default ListNav;