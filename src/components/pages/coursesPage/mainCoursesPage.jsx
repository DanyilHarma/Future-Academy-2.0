import CoursesBlock from "../home/coursesBlock/coursesBlock";
import FilterCoursesContainer from "./filterCourses/filterCoursesContainer";
import classes from "./mainCoursesPage.module.css"

const MainCoursesPage = () => {

    return (
        <div className={`container ${classes.allCourses}`}>
            <h1>Все программы обучения</h1>
            <CoursesBlock showOwl={false} />

        </div>
    )
}

export default MainCoursesPage;