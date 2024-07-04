import classes from "./coursesPeople.module.css"
import ForWho from "./forWho/forWho"

let people = [{
    src: "/images/courses-images/children.png",
    title: "Дети",
    age: "8 — 14 лет"
},
{
    src: "/images/courses-images/children (1).png",
    title: "Подростки",
    age: "8 — 14 лет"
},
{
    src: "/images/courses-images/family.png",
    title: "Взрослые",
    age: "18 — ∞"
}]

let personElement = people.map((person, index) => <ForWho key={index} src={person.src} title={person.title} age={person.age} />)

const CoursesPeople = (props) => {
    return (
        <div className={classes.forWho}>
            {personElement}
        </div >
    )
}

export default CoursesPeople;