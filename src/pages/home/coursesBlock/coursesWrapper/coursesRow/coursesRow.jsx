import Course from "./course/course";
import classes from "./coursesRow.module.css"


const CoursesRow = ({ courses }) => {
    return (
        <div className={classes.courseRow}>
            {courses.map((course, index) => (
                <Course key={index} name={course} />
            ))}
        </div>
    )
}

export default CoursesRow;