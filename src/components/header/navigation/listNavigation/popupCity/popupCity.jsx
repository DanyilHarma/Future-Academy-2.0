import { useState } from "react";
import classes from "./popupCity.module.css"
import TogglePopup from "./togglePopup/togglePopup";

const PopupCity = (props) => {

    const [popup, setPopup] = useState(false)

    const handlePopup = () => {
        setPopup(!popup);
    }

    return (
        <div>
            <div className={classes.cityPopup}>
                <img src={props.isAlternate ? props.geoImage.geoImageLight : props.geoImage.geoImage} alt="" style={{ marginRight: '8px', cursor: 'auto' }}
                    className={classes.geo} />
                <li className={props.isAlternate ? classes.cityMainLight : classes.cityMain} onClick={handlePopup}> Дубоссары</li>
                <img src={props.isAlternate ? props.arrowImage.arrowImageLight : props.arrowImage.arrowImage} alt="" onClick={handlePopup}
                    className={`${classes.cityPopupImg} ${popup ? classes.cityPopupImgActive : ""}`} />


            </div>
            {popup && <TogglePopup />}
        </div>
    )

}

export default PopupCity;