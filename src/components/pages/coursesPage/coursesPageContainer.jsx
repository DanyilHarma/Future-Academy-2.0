import Breadcrumbs from "../../breadcrumb/breadcrumb.jsx";
import CoursesPeople from "../home/coursesBlock/coursesPeople/coursesPeople.jsx";
import CoursesFilter from "./coursesFilter/coursesFilter.jsx";
import classes from "./coursesPageContainer.module.css"


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