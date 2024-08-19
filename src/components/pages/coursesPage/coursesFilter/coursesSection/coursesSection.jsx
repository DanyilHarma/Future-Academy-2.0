import { useSelector } from "react-redux";
import classes from "./coursesSection.module.css"


const CoursesSection = () => {

    const { difficult, education, category, courses } = useSelector(state => state.filterCoursesPage)

    const filteredCourses = courses.filter(course => {
        const difficultMatch = difficult === 'all' || course.difficult.includes(difficult);
        const educationMatch = education === 'any' || course.education.includes(education);
        const categoryMatch = category === 'all' || course.category.includes(category);
        return difficultMatch && educationMatch && categoryMatch;
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
                            <div key={index} className={classes.coursesSectionContainer}>
                                <div className={classes.shadowDevelop}></div>
                                <div className={classes.developCours} style={{ backgroundColor: course.backgroundColor }}>
                                    <span>Программа</span>
                                    <div className={classes.imageInfo}>
                                        <img src={course.imgSrc} alt="" />
                                        <div className={classes.titleInfo} dangerouslySetInnerHTML={{ "__html": course.name }}></div>
                                    </div>
                                    <p dangerouslySetInnerHTML={{ "__html": course.text }}></p>
                                    <span>{course.duration}</span>
                                    {course.sale ? <div className={classes.sale}>{course.sale}</div> : null}
                                </div>
                            </div>
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