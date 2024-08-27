import DOMPurify from "dompurify";
import classes from "./goalAll.module.css"
import { useSelector } from "react-redux"
import LazyLoad from "react-lazyload";

const GoalAll = (props) => {

    const goals = useSelector(state => state.goals.goals);

    return (
        <div className={classes.goal}>
            {goals.map((goal, index) => (<div key={index} className={classes.goalContent}>
                <LazyLoad key={index} offset={100}><img src={goal.imgSrc} alt="" /></LazyLoad>
                <span dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(goal.goalTitle) }}></span>
                <span dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(goal.goalText) }}></span>
            </div>))}
        </div>
    )
}

export default GoalAll;