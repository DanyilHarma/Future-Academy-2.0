import { useState } from "react";
import classes from "./headerBigCamp.module.css"
import ModalFormHelp from "../../../formHelp/modalFormHelp/modalFormHelp";
import FormHelp from "../../../formHelp/formHelp";
import HeaderImg from "../../home/headerBig/headerImg/headerImg";
import LazyLoad from "react-lazyload";

const HeaderBigCamp = (props) => {
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
            <div className={classes.headerMain}>
                <div className="container" style={{ position: "relative" }}>
                    <div className={classes.headerMainContent}>
                        <div className={classes.headerMainCol}>
                            <h1>Летний городской лагерь <br />
                                в Академии Будущего Ход</h1>
                            <span className={classes.headerDescription}></span>
                            <div className={classes.headerMainInfo}>
                                <div className={classes.infoBlock}>
                                    <div className={classes.text}>
                                        Смены полного дня
                                    </div>
                                    <div className={classes.text}>
                                        Смены 1/2 дня
                                    </div>
                                </div>

                                <div className={classes.text}>
                                    <span>от 4670₽ в месяц</span>
                                </div>

                                <div className={classes.trialLessonHeader}>
                                    <span>Открой своё IT-лето!</span>
                                    <div className={classes.trialLessonButton} onClick={openPopupFormHelp}>
                                        Записаться
                                    </div>
                                </div>
                            </div>
                        </div>
                        {props.headerImages.map((image, index) => <img className={classes.headerImages} key={index} src={image.imgSrc} style={{ top: `${image.top}`, left: `${image.left}`, width: `${image.width}` }} />)}
                    </div>
                </div >
            </div>
        </>
    )
}

export default HeaderBigCamp;