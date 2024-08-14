import { useSelector } from "react-redux";
import CoursesRow from "./coursesRow/coursesRow";
import classes from "./coursesWrapper.module.css"

const CoursesWrapper = (props) => {

    const { coursesFirstRow, coursesSecondRow } = useSelector(state => state.coursesBlock.currentSection)

    return (
        <div className={classes.coursesWrapper}>
            <CoursesRow courses={coursesFirstRow} />
            <CoursesRow courses={coursesSecondRow} />
        </div>
    )
}

export default CoursesWrapper;