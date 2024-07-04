import SvgHeader from "./svgHeader/svgHeader";
import classes from "./headerBig.module.css"
import HeaderImg from "./headerImg/headerImg";

const HeaderBig = (props) => {
    return (
        <div className={classes.headerMain}>
            <SvgHeader />
            <HeaderImg />
            <div className={classes.headerContent}>
                <h1><span>Образовательная платформа</span> <br /> <span>ХОД Future Academy</span></h1>
                <p>Актуальные знания для новичков и профессионалов</p>
            </div>
        </div>
    )
}

export default HeaderBig;