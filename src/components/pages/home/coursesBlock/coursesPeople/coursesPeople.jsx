import { useDispatch, useSelector } from "react-redux"
import classes from "./coursesPeople.module.css"
import ForWho from "./forWho/forWho"
import { useEffect, useRef, useState } from "react"
import { changeSectionBlock } from "../../../../../redux/HomepageReducers/coursesBlockReducer"


const CoursesPeople = (props) => {
    const [indicatorPosition, setIndicatorPosition] = useState(0);
    const people = useSelector(state => state.coursesBlock.people)
    const dispatch = useDispatch();
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            const firstElement = containerRef.current.children[0];
            if (firstElement) {
                setIndicatorPosition(firstElement.offsetLeft)
            }
        }
    }, []);

    const handleChangeSection = (id, index) => {
        dispatch(changeSectionBlock(id))
        if (containerRef.current) {
            const selectedElement = containerRef.current.children[index];
            if (selectedElement) {
                setIndicatorPosition(selectedElement.offsetLeft);
            }
        }
    };

    let personElement = people.map((person, index) => <ForWho
        key={person.id}
        id={person.id}
        imgSrc={person.imgSrc}
        title={person.title}
        age={person.age}
        onClick={() => handleChangeSection(person.id, index)}
    />);

    return (
        <div className={classes.forWho} ref={containerRef}>
            {personElement}
            <hr className={classes.indicator} style={{ "height": "5px", "left": `${indicatorPosition}px` }} />
        </div >
    )
}

export default CoursesPeople;