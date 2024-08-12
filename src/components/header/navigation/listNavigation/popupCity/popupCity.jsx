import { useState } from "react";
import classes from "./popupCity.module.css"
import TogglePopup from "./togglePopup/togglePopup";
import arrowTop from "../../../../../assets/images/header-top-images/Vector 197.png"
import arrowBottom from "../../../../../assets/images/header-top-images/Vector 198.png"
import geoImage from "../../../../../assets/images/header-top-images/Group 830.png"

const PopupCity = (props) => {

    const [popup, setPopup] = useState(false)

    const handlePopup = () => {
        setPopup(!popup);
    }

    return (
        <div>
            <div className={classes.cityPopup}>
                <img src={geoImage} alt="" style={{ marginRight: '8px', cursor: 'auto' }}
                    className={classes.geo} />
                <li className={classes.cityMain} onClick={handlePopup}> Дубоссары</li>
                {!popup ? <img src={arrowTop} alt="" onClick={handlePopup} className={classes.cityPopup} />
                    : <img src={arrowBottom} alt="" onClick={handlePopup} className={classes.cityPopup} />
                }

            </div>
            {popup && <TogglePopup />}
        </div>
    )

}

export default PopupCity;