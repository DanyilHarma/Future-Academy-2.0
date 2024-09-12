import { useLocation } from "react-router-dom";
import GoalAll from "../../../../goalAll/goalAll.jsx";
import OwlAll from "../../../../owlAll/owlAll.jsx";
import classes from "./aboutPart.module.css"

const AboutPart = (props) => {
    const location = useLocation();

    const pageConfig = {
        isCoursePage: location.pathname.startsWith("/coursesAllPage"),
        isEventPage: location.pathname.startsWith("/allEvents"),
        isCareerPage: location.pathname.startsWith("/careerPage"),
        isAboutPage: location.pathname === "/aboutAcademy",
        isCampPage: location.pathname === "/summerCamp"
    }

    return (
        <section>
            <div className="container">
                <div className={classes.aboutCours}>
                    <div className={pageConfig.isAboutPage ? classes.aboutGoal : classes.goal}>
                        <OwlAll pageConfig={pageConfig} />
                        <GoalAll pageConfig={pageConfig} />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AboutPart;