import { NavLink } from "react-router-dom";
import classes from "./openDoor.module.css"
import SvgDayOf from "./svgDayOf/svgDayOf.jsx";


const OpenDoor = (props) => {
    return (
        <div className={classes.dayOfOpenDoor}>
            <SvgDayOf />
            <div className={classes.textDayOf}>
                <span>Открытие летнего лагеря</span>
                <p>Приглашаем всех желающих на отдых и развитие <br />
                    в наш летний лагерь,атмосфера и знания обеспечены!</p>
            </div>
            <NavLink to="/summerCamp" className={classes.buttonDayOfContainer}>
                <div className={classes.buttonDayOf}>
                    <span>Записаться </span>
                    <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.87354 0.996582L7.68115 6.56201L1.87354 11.9655" stroke="black" strokeWidth="2"
                            strokeLinecap="round" />
                    </svg>
                </div>
            </NavLink>
        </div>
    )
}

export default OpenDoor;