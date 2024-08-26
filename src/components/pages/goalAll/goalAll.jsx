import DOMPurify from "dompurify";
import classes from "./goalAll.module.css"
import { useSelector } from "react-redux"

const GoalAll = (props) => {

    const goals = useSelector(state => state.goals.goals);

    return (
        <div className={classes.goal}>
            {goals.map((goal, index) => (<div key={index} className={classes.goalContent}>
                <img src={goal.imgSrc} alt="" />
                <span dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(goal.goalTitle) }}></span>
                <span dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(goal.goalText) }}></span>
            </div>))}
        </div>
    )
}

export default GoalAll;