import { useDispatch, useSelector } from "react-redux"
import classes from "./coursesPeople.module.css"
import ForWho from "./forWho/forWho.jsx"
import { changeSectionBlock } from "../../../../../redux/HomepageReducers/coursesBlockReducer.js"
import { setCategory } from "../../../../../redux/CoursesPageReducers/coursePageFiltersReducer.js"
import { useIndicator } from "../../../../../hooks/useIndicator.js"


const CoursesPeople = (props) => {

    const people = useSelector(state => state.coursesBlock.people)
    const dispatch = useDispatch();

    const {
        indicatorPosition,
        indicatorVisible,
        containerRef,
        isCoursesPage,
        isAlternatePage,
        handleChangeSection,
    } = useIndicator(["/coursesAllPage"])

    const handleSectionChange = (id, index, value) => {
        dispatch(changeSectionBlock(id))
        dispatch(setCategory(value))
        handleChangeSection(index);
    };

    let personElement = people.map((person, index) => <ForWho
        key={person.id}
        id={person.id}
        imgSrc={person.imgSrc}
        title={person.title}
        age={person.age}
        value={person.value}
        onClick={() => handleSectionChange(person.id, index, person.value)}
    />);

    return (
        <div className={isAlternatePage ? classes.forWhoAlternate : classes.forWho} ref={containerRef}>
            {personElement}
            {((isCoursesPage && indicatorVisible || !isAlternatePage) && (<hr className={classes.indicator} style={{ "height": "5px", "left": `${indicatorPosition}px` }} />))}
        </div >
    )
}

export default CoursesPeople;