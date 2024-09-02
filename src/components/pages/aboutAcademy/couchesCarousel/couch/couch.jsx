import classes from "./couch.module.css"
import DOMPurify from "dompurify";

const Couch = (props) => {
    return (
        <div className={classes.couches}>
            <div className={classes.couchContent}>
                <div className={classes.circleGradient}>
                    <img src={props.imgSrc} alt={props.name} />
                </div>
                <h4>{props.name}</h4>
                <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(props.proffession) }}></p>
            </div>
        </div>
    )
}

export default Couch;