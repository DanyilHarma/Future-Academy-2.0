import { useState } from "react";
import classes from "./shiftDay.module.css"
import ShiftDayCol from "./shiftDayCol/shiftDayCol";
import ModalFormHelp from "../../../../formHelp/modalFormHelp/modalFormHelp";
import FormHelp from "../../../../formHelp/formHelp";

const ShiftDay = (props) => {
    const [popup, setPopup] = useState(false);

    const openPopupFormHelp = () => setPopup(true);
    const closePopupFormHelp = () => setPopup(false);
    const isPopupFormHelp = popup;
    return (
        <>
            {popup && (<>
                <ModalFormHelp closePopup={closePopupFormHelp} openPopup={openPopupFormHelp}>
                    <FormHelp isPopupFormHelp={isPopupFormHelp} />
                </ModalFormHelp>
            </>)}
            <div className={classes.blueScheduleContainer}>
                <div className={`container ${classes.shiftDayContainer}`}>
                    <h2>Смены полного и 1/2 дня</h2>
                    <div className={classes.shiftDayColumnContainer}>
                        <ShiftDayCol cols={props.shiftDayData.firstCol} />
                        <ShiftDayCol cols={props.shiftDayData.secondCol} />
                    </div>
                    <div className={classes.trialLessonButton} onClick={openPopupFormHelp}>
                        Подать заявку
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShiftDay;