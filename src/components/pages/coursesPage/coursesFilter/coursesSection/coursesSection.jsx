
import { useSelector } from "react-redux";
import classes from "./coursesSection.module.css"
import { NavLink } from "react-router-dom";
import DOMPurify from "dompurify";

const CoursesSection = () => {

    const { difficult, education, category, duration, courses } = useSelector(state => state.filterCoursesPage)

    if (!courses) return null;

    const filteredCourses = courses.filter(course => {
        const difficultMatch = difficult === 'all' || course.difficult === difficult;
        const educationMatch = education === 'all' || course.education === education;
        const categoryMatch = category === 'all' || course.category.includes(category);
        const durationMatch = course.duration >= duration[0] && course.duration <= duration[1]
        return difficultMatch && educationMatch && categoryMatch && durationMatch;
    });

    const groupedCourses = filteredCourses.reduce((result, course, index) => {
        const groupIndex = Math.floor(index / 2);
        if (!result[groupIndex]) {
            result[groupIndex] = [];
        }
        result[groupIndex].push(course);
        return result;
    }, []);

    return (
        <>
            {groupedCourses.length > 0 ? (
                groupedCourses.map((group, groupIndex) => (
                    <div key={groupIndex} className={classes.sectionRow}>
                        {group.map((course, index) => (
                            <NavLink to={`/coursesAllPage/${course.id}`} key={index} className={classes.coursesSectionContainer}>
                                <div className={classes.shadowDevelop}></div>
                                <div className={classes.developCours} style={{ backgroundColor: course.backgroundColor }}>
                                    <span>Программа</span>
                                    <div className={classes.imageInfo}>
                                        <img src={course.imgSrc} alt="" />
                                        <div className={classes.titleInfo} dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(course.name) }}></div>
                                    </div>
                                    <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(course.text) }}></p>
                                    <span>{course.duration} месяца</span>
                                    {course.sale ? <div className={classes.sale}>{course.sale}</div> : null}
                                </div>
                            </NavLink>
                        ))}
                    </div >
                ))
            ) : (
                <p className={classes.messageError}>Нет подходящих курсов под ваш запрос</p>
            )}
        </>
    )

}

export default CoursesSection;