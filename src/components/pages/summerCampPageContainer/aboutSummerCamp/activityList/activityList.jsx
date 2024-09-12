import classes from "./activityList.module.css"

const ActivityList = (props) => {
    return (
        <div className={classes.activityListContainer}>
            <ul className={classes.activityList}>
                {props.cols.map((col, index) => (
                    <li key={index}>{col}</li>
                ))}
            </ul>
        </div>
    )
}

export default ActivityList;