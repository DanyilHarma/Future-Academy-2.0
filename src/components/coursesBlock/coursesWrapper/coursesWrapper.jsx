import CoursesRow from "./coursesRow/coursesRow";
import classes from "./coursesWrapper.module.css"

const CoursesWrapper = (props) => {
    const coursesFirstRow = ["Робототехника", "Создание игр", "Web-разработка", "Мультимедиа", "Шахматы"];
    const coursesSecondRow = ["3D-моделирование и дизайн", "Английский язык", "Блогинг", "Soft skills"];

    return (
        <div className={classes.coursesWrapper}>
            <CoursesRow courses={coursesFirstRow} />
            <CoursesRow courses={coursesSecondRow} />
        </div>
    )
}

export default CoursesWrapper;