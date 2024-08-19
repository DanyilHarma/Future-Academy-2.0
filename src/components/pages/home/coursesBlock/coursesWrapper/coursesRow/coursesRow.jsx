import Course from "./course/course";
import classes from "./coursesRow.module.css"


const CoursesRow = ({ courses, isAlternate }) => {

    return (
        <div className={isAlternate ? classes.coursesRowAlternate : classes.coursesRow}>
            {courses.map((course, index) => (
                <Course key={index} name={course} />
            ))}
        </div>
    )
}

export default CoursesRow;