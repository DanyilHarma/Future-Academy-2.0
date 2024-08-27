import { useDispatch, useSelector } from "react-redux";
import classes from "./educationFilter.module.css"
import { setEducation } from "../../../../../redux/CoursesPageReducers/coursePageFiltersReducer.js";

const EducationFilter = () => {

    const dispatch = useDispatch();
    const filters = useSelector(state => state.filterCoursesPage)

    const handlerEducationChange = (event) => {
        console.log("Выбранное значение:", event.target.value);
        dispatch(setEducation(event.target.value))
    }

    return (
        <form className={classes.typeOfEducation}>
            <div className={classes.liRadio}>
                <input type="radio" id="any" name="type" value="all" onChange={handlerEducationChange} checked={filters.education === "all"} />
                <label htmlFor="any">Любой</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="profession" name="type" value="profession" onChange={handlerEducationChange} checked={filters.education === "profession"} />
                <label htmlFor="profession">Профессия</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="course" name="type" value="course" onChange={handlerEducationChange} checked={filters.education === "course"} />
                <label htmlFor="course">Курс</label>
            </div>
        </form>
    )
}

export default EducationFilter;