import { Route, Routes } from "react-router-dom";
import CoursesWrapper from "../../home/coursesBlock/coursesWrapper/coursesWrapper.jsx";
import ComplexityFilter from "./complexityFilter/complexityFilter.jsx";
import classes from "./coursesFilter.module.css"
import CoursesSection from "./coursesSection/coursesSection.jsx";
import DoubleSliderFilter from "./durationFilter/durationFilter.jsx";
import EducationFilter from "./educationFilter/educationFilter.jsx";


const CoursesFilter = () => {
    return (
        <>
            <div className={classes.allCoursesFilter}>
                <h6>Уровень сложности</h6>
                <ComplexityFilter />
                <hr className={classes.filterHr} />
                <h6>Тип обучения</h6>
                <EducationFilter />
                <hr className={classes.filterHr} />
                <h6>Длительность обучения</h6>
                <DoubleSliderFilter />
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