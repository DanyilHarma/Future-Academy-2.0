import WelcomeHomepage from "../../home/welcomeContainer/welcome/welcomeHomepage";
import AboutCreatorBlock from "./aboutCreatorBlock/aboutCreatorBlock";
import classes from "./CreatorAndValuesContainer.module.css"

const CreatorAndValuesContainer = (props) => {

    const welcomeElement = props.valuesData.map(welcome => (<WelcomeHomepage key={welcome.id} imgSrc={welcome.imgSrc} text={welcome.text} aboutPage={true} />))

    return (
        <div className="container">
            <AboutCreatorBlock aboutCreatorData={props.aboutCreatorData} />
            <h2 className={classes.welcomeTitle}>Наши ценности</h2>
            <div className={classes.welcomeInfo}>
                {welcomeElement}
            </div>
        </div>
    )
}

export default CreatorAndValuesContainer;