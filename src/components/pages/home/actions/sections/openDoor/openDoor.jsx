import classes from "./openDoor.module.css"
import SvgDayOf from "./svgDayOf/svgDayOf";


const OpenDoor = (props) => {
    return (
        <div className={classes.dayOfOpenDoor}>
            <SvgDayOf />
            <div className={classes.textDayOf}>
                <span>День открытых дверей</span>
                <p>Приглашаем всех желающих на бесплатную экскурсию <br />
                    в мир востребованных профессий и полезных навыков</p>
            </div>
            <div className={classes.buttonDayOfContainer}>
                <div className={classes.buttonDayOf}>
                    <span>Записаться </span>
                    <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.87354 0.996582L7.68115 6.56201L1.87354 11.9655" stroke="black" strokeWidth="2"
                            strokeLinecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default OpenDoor;