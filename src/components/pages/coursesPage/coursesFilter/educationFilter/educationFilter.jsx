import { useDispatch, useSelector } from "react-redux";
import classes from "./educationFilter.module.css"
import { setEducation } from "../../../../../redux/CoursesPageReducers/coursePageFiltersReducer";

const EducationFilter = () => {

    const dispatch = useDispatch();
    const filter = useSelector(state => state.filterCoursesPage)

    const handlerEducationChange = (event) => {
        dispatch(setEducation(event.target.value))
    }

    return (
        <form className={classes.typeOfEducation}>
            <div className={classes.liRadio}>
                <input type="radio" id="all" name="type" value="any" onChange={handlerEducationChange} checked={filter.education === "any"} />
                <label htmlFor="all">Любой</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="profession" name="type" value="profession" onChange={handlerEducationChange} checked={filter.education === "profession"} />
                <label htmlFor="profession">Профессия</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="course" name="type" value="course" onChange={handlerEducationChange} checked={filter.education === "course"} />
                <label htmlFor="course">Курс</label>
            </div>
        </form>
    )
}

export default EducationFilter;