import DOMPurify from "dompurify";
import classes from "./goalAll.module.css"
import { useSelector } from "react-redux"
import LazyLoad from "react-lazyload";

const GoalAll = (props) => {

    const goals = useSelector(state => state.goals.goals);

    const isCoursePage = props.pageConfig?.isCoursePage || false;
    const isEventPage = props.pageConfig?.isEventPage || false;
    const isAboutPage = props.pageConfig?.isAboutPage || false;

    const getContentClass = () => {
        return (isCoursePage || isEventPage) ? classes.goalContent : classes.goalAboutContent
    }

    const getContentImages = () => {
        return (isCoursePage || isEventPage) ? "" : classes.aboutAcademyImages
    }



    return (
        <div className={classes.goal}>
            {goals.map((goal, index) => (<div key={index} className={getContentClass()}>
                <LazyLoad key={index} offset={100}><img src={goal.imgSrc} alt="" className={getContentImages()} /></LazyLoad>
                {(isCoursePage || isEventPage) && (<span dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(goal.goalTitle) }}></span>)}
                <span dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(goal.goalText) }}></span>
            </div>))}
        </div>
    )
}

export default GoalAll;