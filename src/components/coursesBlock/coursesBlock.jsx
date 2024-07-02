import classes from "./coursesBlock.module.css"
import CoursesPeople from "./coursesPeople/coursesPeople";
import Owl from "./owl/owl";
import CoursesWrapper from "./coursesWrapper/coursesWrapper"

const CoursesBlock = (props) => {
    return (
        <section>
            <div className={classes.coursesBlock}>
                <Owl />
                <div className={classes.coursesContent}>
                    <CoursesPeople />
                    <hr />
                    <CoursesWrapper />
                </div>
            </div>
        </section>
    )
}

export default CoursesBlock;