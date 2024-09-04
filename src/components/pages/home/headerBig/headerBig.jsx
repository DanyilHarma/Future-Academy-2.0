import SvgHeader from "./svgHeader/svgHeader.jsx";
import classes from "./headerBig.module.css"
import HeaderImg from "./headerImg/headerImg.jsx";
import { useLocation } from "react-router-dom";


const HeaderBig = (props) => {
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


    return (
        <div className={isCareerPage ? classes.headerMainCareer : classes.headerMain}>
            {!isCareerPage && (<SvgHeader />)}
            <HeaderImg isCareerPage={isCareerPage} />
            <div className={classes.headerContent}>
                {changeText()}
                {isCareerPage && (<div className={classes.questionButton}>Задать вопрос о трудоустройстве</div>)}
            </div>
        </div>
    )
}

export default HeaderBig;