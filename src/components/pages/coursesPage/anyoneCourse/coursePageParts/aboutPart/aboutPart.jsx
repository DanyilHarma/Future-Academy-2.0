import GoalAll from "../../../../goalAll/goalAll";
import OwlAll from "../../../../owlAll/owlAll";
import classes from "./aboutPart.module.css"

const AboutPart = (props) => {

    const course = props.course

    return (
        <section>
            <div className="container">
                <div className={classes.aboutChessCours}>
                    <div className={classes.chessGoal}>
                        <OwlAll />
                        <GoalAll />
                    </div>
                </div>
            </div>
        </section >
    )
}

export default AboutPart;