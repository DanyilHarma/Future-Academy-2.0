import { useParams } from "react-router-dom";
import classes from "./anyoneCourse.module.css"
import { useDispatch, useSelector } from "react-redux";
import AnyoneCourseHeader from "./coursePageParts/coursePageHeader/anyoneCourseHeader"
import AboutPart from "./coursePageParts/aboutPart/aboutPart";
import { useEffect } from "react";
import { setCourseGoalData } from "../../../../redux/goalReducer";
import { setCourseOwlText } from "../../../../redux/owlReducer";

const AnyoneCoursesPage = () => {

    const dispatch = useDispatch();
    const { courseId } = useParams();
    const courses = useSelector(state => state.everyCourse.courses);

    const course = courses.find(c => c.id === courseId);

    useEffect(() => {
        if (course && course.goalsData && Array.isArray(course.goalsData)) {
            dispatch(setCourseGoalData(course.goalsData))
        }
        if (course && course.unionText) {
            dispatch(setCourseOwlText(course.unionText))
        }
    }, [course, dispatch])

    return (
        <>
            <AnyoneCourseHeader course={course} />
            <AboutPart course={course} />
        </>
    )
}

export default AnyoneCoursesPage;