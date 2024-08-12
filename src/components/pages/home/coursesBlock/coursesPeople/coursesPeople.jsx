import { useSelector } from "react-redux"
import classes from "./coursesPeople.module.css"
import ForWho from "./forWho/forWho"



const CoursesPeople = (props) => {
    const people = useSelector(state => state.dataPeopleCourse.people)

    let personElement = people.map((person, index) => <ForWho key={index} imgSrc={person.imgSrc} title={person.title} age={person.age} />)

    return (
        <div className={classes.forWho}>
            {personElement}
        </div >
    )
}

export default CoursesPeople;