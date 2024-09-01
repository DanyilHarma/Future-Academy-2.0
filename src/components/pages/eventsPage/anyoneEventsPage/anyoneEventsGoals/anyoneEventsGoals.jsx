import GoalAll from "../../../goalAll/goalAll";
import OwlAll from "../../../owlAll/owlAll";
import classes from "./anyoneEventsGoals.module.css"


const AnyoneEventsGoals = (props) => {

    return (
        <section>
            <div className="container">
                <div className={classes.aboutChessCourse}>
                    <div className={classes.goalContainer}>
                        <OwlAll />
                        <GoalAll />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AnyoneEventsGoals;