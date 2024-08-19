import CoursesWrapper from "../../home/coursesBlock/coursesWrapper/coursesWrapper";
import ComplexityFilter from "./complexityFilter/complexityFilter";
import classes from "./coursesFilter.module.css"
import CoursesSection from "./coursesSection/coursesSection";
import EducationFilter from "./educationFilter/educationFilter";

const CoursesFilter = () => {
    return (
        <>
            <div className={classes.allCoursesFilter}>
                <h6>Уровень сложности</h6>
                <ComplexityFilter />
                <hr className={classes.filterHr} />
                <h6>Тип обучения</h6>
                <EducationFilter />
            </div>
            <div className={classes.allCourses}>
                <h6>Направления</h6>
                <div className={classes.directions}>
                    <CoursesWrapper />
                </div>
                <div className={classes.coursesSection}>
                    <CoursesSection />
                </div>
            </div>
        </>
    )
}

export default CoursesFilter;