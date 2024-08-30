import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import AnyoneCourseHeader from "./coursePageParts/coursePageHeader/anyoneCourseHeader.jsx"
import AboutPart from "./coursePageParts/aboutPart/aboutPart.jsx";
import { useEffect, useState } from "react";
import { setCourseGoalData } from "../../../../redux/goalReducer.js";
import { setCourseOwlText } from "../../../../redux/owlReducer.js";
import CourseblockInfo from "./coursePageParts/CourseblockInfo/courseblockInfo.jsx";
import CoursesOverviewSection from "./coursePageParts/coursesOverviewSection/coursesOverviewSection.jsx";
import Couches from "./coursePageParts/couches/couches.jsx";
import MyAccordion from "./coursePageParts/myAccordion/myAccordion.jsx";
import { configureStore } from "../../../../redux/redux-store.js";

const AnyoneCoursesPage = () => {

    const dispatch = useDispatch();
    const { courseId } = useParams();
    const [course, setCourse] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            const store = await configureStore(courseId);
            const courseData = store.getState().everyCourse
            const selectedCourse = courseData.find(c => c.id === courseId);
            setCourse(selectedCourse);
        };
        fetchData();
    }, [courseId]);

    useEffect(() => {
        if (course && course.goalsData && Array.isArray(course.goalsData)) {
            dispatch(setCourseGoalData(course.goalsData))
        }
        if (course && course.unionText) {
            dispatch(setCourseOwlText(course.unionText))
        }
    }, [course, dispatch])

    if (!course) {
        return <div>Загрузка...</div>;
    }

    return (
        <>
            <AnyoneCourseHeader course={course} />
            <AboutPart />
            <CourseblockInfo infoData={course.infoCourse} benefitesData={course.benefitesFromTheCourse} />
            <CoursesOverviewSection overviewInfo={course.overviewSectionData} dataPriceInfo={course} />
            <Couches couchesData={course.overviewSectionData.couchesData} couchesBackgroundImages={course.overviewSectionData.couchesBackgroundImages} />
            <MyAccordion accordionData={course.overviewSectionData.accordionData} />
        </>
    )
}

export default AnyoneCoursesPage;