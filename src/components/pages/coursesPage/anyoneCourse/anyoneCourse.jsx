import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AnyoneCourseHeader from "./coursePageParts/coursePageHeader/anyoneCourseHeader"
import AboutPart from "./coursePageParts/aboutPart/aboutPart";
import { useEffect } from "react";
import { setCourseGoalData } from "../../../../redux/goalReducer";
import { setCourseOwlText } from "../../../../redux/owlReducer";
import CourseblockInfo from "./coursePageParts/CourseblockInfo/courseblockInfo";
import CoursesOverviewSection from "./coursePageParts/coursesOverviewSection/coursesOverviewSection";
import Couches from "./coursePageParts/couches/couches";
import MyAccordion from "./coursePageParts/myAccordion/myAccordion";

const AnyoneCoursesPage = () => {

    const dispatch = useDispatch();
    const { courseId } = useParams();
    const courses = useSelector(state => state.everyCourse);

    const course = courses.find(c => c.id === courseId);

    useEffect(() => {
        if (course && course.goalsData && Array.isArray(course.goalsData)) {
            dispatch(setCourseGoalData(course.goalsData))
        }
        if (course && course.unionText) {
            dispatch(setCourseOwlText(course.unionText))
        }
    }, [course, dispatch])
    // debugger
    return (
        <>
            <AnyoneCourseHeader course={course} />
            <AboutPart course={course} />
            <CourseblockInfo infoData={course.infoCourse} benefitesData={course.benefitesFromTheCourse} />
            <CoursesOverviewSection overviewInfo={course.overviewSectionData} dataPriceInfo={course} />
            <Couches couchesData={course.overviewSectionData.couchesData} couchesBackgroundImages={course.overviewSectionData.couchesBackgroundImages} />
            <MyAccordion accordionData={course.overviewSectionData.accordionData} />
        </>
    )
}

export default AnyoneCoursesPage;