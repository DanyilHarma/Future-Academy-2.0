import { useDispatch, useSelector } from "react-redux";
import classes from "./complexityFilter.module.css"
import { setDifficult } from "../../../../../redux/CoursesPageReducers/coursePageFiltersReducer";

const ComplexityFilter = () => {

    const dispatch = useDispatch();
    const filters = useSelector(state => state.filterCoursesPage)

    const handlerDifficultyChange = (event) => {
        dispatch(setDifficult(event.target.value));
    }

    return (
        <form action="" className={classes.complexity}>
            <div className={classes.liRadio}>
                <input type="radio" id="all" name="difficult" value="all" onChange={handlerDifficultyChange} checked={filters.difficult === "all"} />
                <label htmlFor="all" >Все</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="newbie" name="difficult" value="newbie" onChange={handlerDifficultyChange} checked={filters.difficult === "newbie"} />
                <label htmlFor="newbie">Новичок</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="user" name="difficult" value="user" onChange={handlerDifficultyChange} checked={filters.difficult === "user"} />
                <label htmlFor="user">Пользователь</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="proffessional" name="difficult" value="proffessional"
                    onChange={handlerDifficultyChange} checked={filters.difficult === "proffessional"} />
                <label htmlFor="proffessional">Проффесионал</label>
            </div>
            <div className={classes.liRadio}>
                <input type="radio" id="cheater" name="difficult" value="cheater" onChange={handlerDifficultyChange} checked={filters.difficult === "cheater"} />
                <label htmlFor="cheater">Читер</label>
            </div>
        </form>
    )
}

export default ComplexityFilter;