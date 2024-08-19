import { useDispatch, useSelector } from "react-redux";
import classes from "./complexityFilter.module.css"
import { setDifficult } from "../../../../../redux/CoursesPageReducers/coursePageFiltersReducer";

const ComplexityFilter = () => {

    const dispatch = useDispatch();
    const filters = useSelector(state => state.filterCoursesPage)

    const handleDifficultyChange = (event) => {
        dispatch(setDifficult(event.target.value));
    }

    return (
        <form action="" className={classes.complexity}>
            <div className={classes.liRadio}>
                <input type="radio" id="all" name="difficult" value="all" data-filter="all" onChange={handleDifficultyChange} checked={filters.difficult === "all"} />
                <label htmlFor="all" >Все</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="newbie" name="difficult" value="newbie" data-filter="newbie" onChange={handleDifficultyChange} checked={filters.difficult === "newbie"} />
                <label htmlFor="newbie">Новичок</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="user" name="difficult" value="user" data-filter="user" onChange={handleDifficultyChange} checked={filters.difficult === "user"} />
                <label htmlFor="user">Пользователь</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="proffessional" name="difficult" value="proffessional"
                    onChange={handleDifficultyChange} checked={filters.difficult === "proffessional"} />
                <label htmlFor="proffessional">Проффесионал</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="cheater" name="difficult" value="cheater" data-filter="cheater" onChange={handleDifficultyChange} checked={filters.difficult === "cheater"} />
                <label htmlFor="cheater">Читер</label>
            </div>
        </form>
    )
}

export default ComplexityFilter;