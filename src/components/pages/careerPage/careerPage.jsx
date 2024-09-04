import { useEffect } from "react";
import AboutPart from "../coursesPage/anyoneCourse/coursePageParts/aboutPart/aboutPart";
import HeaderBig from "../home/headerBig/headerBig";
import classes from "./careerPage.module.css"
import { useDispatch } from "react-redux";
import careerData from "./careerData.json"
import { setCourseGoalData } from "../../../redux/goalReducer";
import { setCourseOwlText } from "../../../redux/owlReducer";

const CareerPage = () => {

    const dispatch = useDispatch()

    const career = careerData;

    useEffect(() => {
        if (career && career.aboutPart.goalsData && Array.isArray(career.aboutPart.goalsData)) {
            dispatch(setCourseGoalData(career.aboutPart.goalsData))
        }
        if (career && career.aboutPart.unionText) {
            dispatch(setCourseOwlText(career.aboutPart.unionText))
        }
    }, [career, dispatch])

    return (
        <div>
            <HeaderBig />
            <AboutPart />
        </div>
    )
}

export default CareerPage; 