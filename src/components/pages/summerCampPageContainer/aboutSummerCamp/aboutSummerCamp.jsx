import { useLocation } from "react-router-dom";
import OwlAll from "../../owlAll/owlAll";
import classes from "./aboutSummerCamp.module.css"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCourseOwlText } from "../../../../redux/owlReducer";
import ActivityList from "./activityList/activityList";

const AboutSummerCamp = (props) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const text = props.aboutData.unionText

    const firstCol = props.aboutData.firstCol;
    const secondCol = props.aboutData.secondCol;

    useEffect(() => {
        if (text) {
            dispatch(setCourseOwlText(text))
        }
    }, [text, dispatch])

    const pageConfig = {
        isCoursePage: location.pathname.startsWith("/coursesAllPage"),
        isEventPage: location.pathname.startsWith("/allEvents"),
        isCareerPage: location.pathname.startsWith("/careerPage"),
        isAboutPage: location.pathname === "/aboutAcademy",
        isCampPage: location.pathname === "/summerCamp"
    }

    return (
        <div className={`container ${classes.aboutCampContainer}`}>
            <OwlAll pageConfig={pageConfig} />
            <ActivityList cols={firstCol} />
            <ActivityList cols={secondCol} />
        </div>
    )
}

export default AboutSummerCamp;