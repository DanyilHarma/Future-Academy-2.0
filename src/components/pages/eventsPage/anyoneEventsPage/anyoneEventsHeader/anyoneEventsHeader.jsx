import { useState } from "react";
import classes from "./anyoneEventsHeader.module.css"
import DOMPurify from "dompurify";
import ModalFormHelp from "../../../../formHelp/modalFormHelp/modalFormHelp";
import FormHelp from "../../../../formHelp/formHelp";


const AnyoneEventsHeader = (props) => {
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
            <div className={classes.mainHeader}>
                <div className="container" style={{ position: "relative" }}>
                    {props.headerData.headerImages.map((image, index) => (
                        <img className={classes.headerVectorImage} key={index} src={image.imgSrc} style={{ top: `${image.top}`, left: `${image.left}`, width: `${image.width}` }} />
                    ))}
                    <div className={classes.mainHeaderContent}>
                        <div className={classes.mainHeaderCol}>
                            <h1 dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(props.headerData.headerTitle) }}></h1>
                            <span dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(props.headerData.headerDescription) }}></span>
                            <div className={classes.mainHeaderInfo}>
                                {props.headerData.headerParagrafs.map((paragraf, index) => (
                                    <div key={index} dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(paragraf) }}></div>
                                ))}
                            </div>
                            <div className={classes.headerPrice}>
                                <span>Запишитесь сейчас</span>
                            </div>
                            <div className={classes.headerTrialLesson}>
                                <div className={classes.trialLessonButton} onClick={openPopupFormHelp}>
                                    Записаться на мероприятие
                                </div>
                            </div>
                        </div>
                        <div className={classes.headerImage}>
                            <img src={props.headerData.headerBackgroundImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnyoneEventsHeader;