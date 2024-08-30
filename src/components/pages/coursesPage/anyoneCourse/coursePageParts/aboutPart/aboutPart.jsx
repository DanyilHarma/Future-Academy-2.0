import GoalAll from "../../../../goalAll/goalAll.jsx";
import OwlAll from "../../../../owlAll/owlAll.jsx";
import classes from "./aboutPart.module.css"

const AboutPart = (props) => {

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