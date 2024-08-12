import { useState } from "react";
import classes from "./togglePopup.module.css"
import closeImage from "../../../../../../assets/images/header-top-images/Group 858.png"

const TogglePopup = (props) => {

    const [isOpen, setClose] = useState(true);

    const handleClose = () => {
        setClose(false);
    }

    if (!isOpen) return null

    return (
        <div className={classes.popupCityContainer}>
            <div className={classes.shadowGradientPopupCity}>
                <div className={classes.popupCity}>
                    <div className={classes.titleWrap}>
                        <h2>Выберите свой город</h2>
                        <img src={closeImage} alt="" onClick={handleClose} className={classes.closePopup} />
                    </div>
                    <div className={classes.cities}>
                        <div className={classes.citiesCol}>
                            <span>Бендеры</span>
                            <span>Григориополь</span>
                            <span>Дубоссары</span>
                        </div>
                        <div className={classes.citiesCol}>
                            <span>Днестровск</span>
                            <span>Каменка</span>
                            <span>Рыбница</span>
                        </div>
                        <div className={classes.citiesCol}>
                            <span>Слободзея</span>
                            <span>Тирасполь</span>
                            <span>Ягорлык</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default TogglePopup;