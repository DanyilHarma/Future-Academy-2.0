import DOMPurify from "dompurify";
import classes from "./chessBenefites.module.css"
import { useState } from "react";
import FormHelp from "../../../../../../formHelp/formHelp";
import ModalFormHelp from "../../../../../../formHelp/modalFormHelp/modalFormHelp";

const ChessBenefites = (props) => {

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
            <div className={classes.chessBenefitesContainer}>
                <div className="container">
                    <div className={classes.chessBenefitestexts}>
                        {props.benefitesData.advantages.map((benefite, index) => (
                            <div key={index} className={classes.benefiteText} dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(benefite) }}>
                            </div>
                        ))}
                    </div>
                    <div className={classes.benefiteButton} onClick={openPopupFormHelp}>Записаться на курс</div>
                </div>
            </div>
        </>
    )
}

export default ChessBenefites;