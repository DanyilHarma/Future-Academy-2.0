import { Navigate } from "react-router-dom";
import Breadcrumbs from "../../breadcrumb/breadcrumb";
import CoursesPeople from "../home/coursesBlock/coursesPeople/coursesPeople";
import CoursesFilter from "./coursesFilter/coursesFilter";
import classes from "./coursesPageContainer.module.css"
import AnyoneCoursesPage from "./anyoneCourse/anyoneCourse";

const CoursesPageContainer = () => {
    return (
        <div className={`container ${classes.allCourses}`}>
            <Breadcrumbs />
            <h1 className={classes.allCoursesTitle}>Все программы обучения</h1>
            <CoursesPeople />
            <hr className={classes.firstHr} />
            <div className={classes.allCoursesContainer}>
                <CoursesFilter />
            </div>
        </div>
    )
}

export default CoursesPageContainer;