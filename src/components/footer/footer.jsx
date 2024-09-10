import classes from "./footer.module.css"
import ColumnsFooter from "./columnsFooter/columnsFooter";
import { useSelector } from "react-redux";
import SocietyFooter from "./society/societyFooter";
import { NavLink, useLocation } from "react-router-dom";

const Footer = () => {
    const { society: societyImages, logo } = useSelector(state => state.footer)

    const location = useLocation();

    const isAuthPage = location.pathname === "/enter";
    const isTestPage = location.pathname === "/test";

    return (
        <footer>
            <div className="container">
                <div className={classes.footerContainer}>
                    <div className={classes.infoBlockFooter}>
                        <NavLink to="#" style={{ marginTop: (isAuthPage || isTestPage) ? "60px" : "155px" }}><img src={logo.imgSrc} alt="" className={classes.logoFooter} /></NavLink>

                        <div className={classes.infoContactFooter}>
                            <a href="tel:+37368432044">8 800 950-33-98 </a>
                            <div>г. Дубоссары, ул. Кирова, д. 82</div>
                            <a href="mailto:danilagarma1999@mail.ru">danilagarma1999@mail.ru</a>
                        </div>

                        <div className={classes.societyFooter}>

                            {societyImages.map((societyImage, societyIndex) => (
                                <SocietyFooter key={societyIndex} imgSrc={societyImage.imgSrc} href={societyImage.link} />
                            ))}

                        </div>

                        <div>© ХОД, Future Academy</div>
                    </div>

                    <ColumnsFooter />

                </div>
            </div>
        </footer>
    )
}

export default Footer;