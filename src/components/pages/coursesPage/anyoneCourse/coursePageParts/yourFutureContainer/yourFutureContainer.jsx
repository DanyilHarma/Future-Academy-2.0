import CareerChoice from "./careerChoice/careerChoice";
import Resume from "./resume/resume";
import classes from "./yourFutureContainer.module.css"

const YourFutureContainer = (props) => {

    return (
        <div className={`container ${classes.yourFutureContainer}`}>
            <CareerChoice careerChoiceData={props.yourFutureData.careerChoice} />
            <Resume resumeData={props.yourFutureData.resume} />
        </div>
    )
}

export default YourFutureContainer;