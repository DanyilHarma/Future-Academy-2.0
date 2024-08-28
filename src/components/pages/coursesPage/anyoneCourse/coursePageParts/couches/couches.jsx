import DOMPurify from "dompurify";
import classes from "./couches.module.css"
import LazyLoad from "react-lazyload";


const Couches = (props) => {

    return (
        <div className={classes.couchesContainer}>
            <div className="container">
                <div className={classes.backgroundImageContainer}></div>
                <div className={classes.couchesContainerBackgroundImages}>
                    {props.couchesBackgroundImages.map((image, index) => (
                        <img key={index} src={image.imgSrc} />
                    ))}
                </div>
                <h2>Наши преподаватели</h2>
                <div className={classes.couches}>
                    {props.couchesData.map((couch, index) => (
                        <div key={index} className={classes.couchContent}>
                            <div className={classes.circleGradient}>
                                <img src={couch.imgSrc} alt={couch.name} />
                            </div>
                            <h4>{couch.name}</h4>
                            <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(couch.proffession) }}></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Couches;