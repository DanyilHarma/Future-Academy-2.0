import { NavLink } from "react-router-dom";

const ListNav = (props) => {

    const { darkImage, lightImage } = props.imgSrc || {};

    return (
        <div onClick={props.onClick}>
            <li >
                <NavLink to={props.link} >
                    {props.imgSrc && <img src={props.isAlternate ? lightImage : darkImage} alt={props.text} />}{props.text}
                    {props.imgSrcSecond && <img src={props.isAlternate ? lightImage : darkImage} alt={props.text} />}
                </NavLink>
            </li>
        </div>
    )
}

export default ListNav;