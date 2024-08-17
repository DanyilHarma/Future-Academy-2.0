import FilterCourses from "./filter/filterCourses";
import classes from "./filterCoursesContainer.module.css"

const FilterCoursesContainer = () => {

    return (
        <div className={classes.allCoursesFilter}>
            <h6>Уровень сложности</h6>
            <FilterCourses />
        </div>
    )
}

export default FilterCoursesContainer;