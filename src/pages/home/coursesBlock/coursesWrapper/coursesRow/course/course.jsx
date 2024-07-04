import classes from "./course.module.css"


const Course = ({ name }) => {
    return (
        <div className={classes.containerCourse}>
            <div className={classes.shadowCourse}></div>
            <div className={classes.course}>{name}</div>
        </div>
    )
}

export default Course;