import DOMPurify from "dompurify";
import classes from "./employmentPath.module.css"
import { useState } from "react";
import ModalFormHelp from "../../../formHelp/modalFormHelp/modalFormHelp";
import FormHelp from "../../../formHelp/formHelp";


const EmploymentPath = (props) => {
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
            <div className={classes.employmentPathContainer}>
                <div className="container">
                    <div className={classes.employmentPathContent}>
                        <h2>{props.employmentPathData.title}</h2>
                        <div className={classes.pathsContainer}>
                            {props.employmentPathData.paths.map((path, index) => (
                                <div key={index} className={classes.path} style={{ backgroundImage: `url(${path.imgSrcBackground})` }}>
                                    <img src={path.imgSrc} alt="" />
                                    <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(path.text) }}></p>
                                </div>
                            ))}
                        </div>
                        <div className={classes.questionButton} onClick={openPopupFormHelp}>Задать вопрос о трудоустройстве</div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default EmploymentPath; 