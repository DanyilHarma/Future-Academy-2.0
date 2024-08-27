import classes from "./coursesBlock.module.css"
import CoursesPeople from "./coursesPeople/coursesPeople.jsx";
import Owl from "./owl/owl.jsx";
import CoursesWrapper from "./coursesWrapper/coursesWrapper.jsx"

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