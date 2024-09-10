import SvgHeader from "./svgHeader/svgHeader.jsx";
import classes from "./headerBig.module.css"
import HeaderImg from "./headerImg/headerImg.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import FormHelp from "../../../formHelp/formHelp.jsx";
import ModalFormHelp from "../../../formHelp/modalFormHelp/modalFormHelp.jsx";


const HeaderBig = (props) => {
    const [popup, setPopup] = useState(false);
    const location = useLocation();

    const isCareerPage = location.pathname === "/careerPage";

    const changeText = () => {
        return isCareerPage ? (
            <h1 className={classes.careerTitle}>
                <span>Поможем построить карьеру</span><br />
                <span>Карьерный центр ХОД Future Academy</span>
            </h1>
        ) : (
            <>
                <h1 className={classes.homeTitle}>
                    <span>Образовательная платформа</span> <br />
                    <span>ХОД Future Academy</span>
                </h1>
                <p>Актуальные знания для новичков и профессионалов</p>
            </>
        );
    }

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
            <div className={isCareerPage ? classes.headerMainCareer : classes.headerMain}>
                {!isCareerPage && (<SvgHeader />)}
                <HeaderImg isCareerPage={isCareerPage} />
                <div className={classes.headerContent}>
                    {changeText()}
                    {isCareerPage && (<div className={classes.questionButton} onClick={openPopupFormHelp}>Задать вопрос о трудоустройстве</div>)}
                </div>
            </div>
        </>
    )
}

export default HeaderBig;