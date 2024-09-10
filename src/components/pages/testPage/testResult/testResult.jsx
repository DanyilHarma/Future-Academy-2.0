import { useSelector } from "react-redux";
import classes from "./testResult.module.css";
import { NavLink } from "react-router-dom";
import DOMPurify from "dompurify";

const TestResult = () => {
    const result = useSelector(state => state.testPage.result);
    const courseResults = useSelector(state => state.testPage.courseResults)
    const courses = useSelector(state => state.filterCoursesPage.courses)
    const selectedCourse = courses.find(course => course.id === result);

    if (!result || !selectedCourse) return null

    return (
        <div className="container">
            <div className={classes.resultWrapper}>
                <h2>{courseResults[result].description}</h2>

                <NavLink to={`/coursesAllPage/${result}`} className={classes.coursesSectionContainer}>
                    <div className={classes.shadowDevelop}></div>
                    <div className={classes.developCours} style={{ backgroundColor: selectedCourse.backgroundColor }}>
                        <span>Программа</span>
                        <div className={classes.imageInfo}>
                            <img src={selectedCourse.imgSrc} alt="" />
                            <div className={classes.titleInfo} dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(selectedCourse.name) }}></div>
                        </div>
                        <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(selectedCourse.text) }}></p>
                        <span>{selectedCourse.duration} месяца</span>
                        {selectedCourse.sale ? <div className={classes.sale}>{selectedCourse.sale}</div> : null}
                    </div>
                </NavLink>

            </div>
        </div>
    )
}

export default TestResult;