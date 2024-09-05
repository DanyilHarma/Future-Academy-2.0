import Quantity from "../../home/actions/quantity/quantity";
import classes from "./advantagesFA.module.css"

const AdvantagesFA = (props) => {

    return (
        <div className={`container ${classes.advantagesContainer}`}>
            <h2>{props.advantagesData.title}</h2>
            <p>{props.advantagesData.text}</p>
            <Quantity isCareerPage={true} />
        </div>
    )
}

export default AdvantagesFA; 