import { useSelector } from "react-redux";
import CoursesRow from "./coursesRow/coursesRow.jsx";
import classes from "./coursesWrapper.module.css"
import useIsAlternate from "../../../../../hooks/useAlternatePaths.js";

const CoursesWrapper = (props) => {

    const { coursesFirstRow, coursesSecondRow } = useSelector(state => state.coursesBlock.currentSection)

    const alternatePaths = ["/coursesAllPage"];
    const isAlternate = useIsAlternate(alternatePaths);

    return (
        <div className={classes.coursesWrapper}>
            <CoursesRow courses={coursesFirstRow} isAlternate={isAlternate} />
            <CoursesRow courses={coursesSecondRow} isAlternate={isAlternate} />
        </div>
    )
}

export default CoursesWrapper;