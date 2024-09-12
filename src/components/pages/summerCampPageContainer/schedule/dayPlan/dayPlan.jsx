import classes from "./dayPlan.module.css"
import FullDayPlan from "./fullDayPlan/fullDayPlan";


const DayPlan = (props) => {
    return (
        <div className={`container ${classes.dayPlanContainer}`}>
            <div className={classes.dayPlan}>ПЛАН ДНЯ</div>
            <FullDayPlan dayPlanData={props.dayPlanData} isHalfDay={false} />
            <FullDayPlan dayPlanData={props.dayPlanData} isHalfDay={true} />
        </div>
    )
}

export default DayPlan;