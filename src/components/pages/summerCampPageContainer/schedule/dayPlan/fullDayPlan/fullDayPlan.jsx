import classes from "./fullDayPlan.module.css"
import image from "../../../../../../assets/images/summerCampImages/Group 1013.png"


const FullDayPlan = (props) => {

    const dayPlanData = props.isHalfDay ?
        props.dayPlanData.allDayPlan.slice(0, 6)
        : props.dayPlanData.allDayPlan

    return (
        <div className={classes.fullDayPlan}>
            {!props.isHalfDay ? <h2>Смена полного дня</h2> : <h2>Смена 1/2 дня</h2>}
            <div className={classes.dayPlanWrapper}>
                <div className={classes.dayPlanContent}>
                    {dayPlanData.map((plan, index) => (
                        <div key={index} className={classes.dayPlan}>
                            <div className={classes.planContainer}>

                                <div className={classes.plan}>
                                    <span>{plan.start}</span>
                                    <hr className={classes.firstHr} />
                                    <span>{plan.finish}</span>
                                </div>
                                {plan.start1 || plan.finish1 ? (<div className={classes.plan}>
                                    <span>{plan.start1}</span>
                                    <hr className={classes.firstHr} />
                                    <span>{plan.finish1}</span>
                                </div>) : null}

                            </div>
                            <div className={classes.planDescription}>
                                {plan.start1 || plan.finish1 ? <img src={image} /> : <hr className={classes.secondHr} />}
                                <div><img src={plan.imgSrc} alt="" /></div>
                                <span>{plan.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FullDayPlan;