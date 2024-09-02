import DOMPurify from "dompurify";
import classes from "./aboutCreatorBlock.module.css"

const AboutCreatorBlock = (props) => {

    return (
        <>
            <div className={classes.aboutCreatorContainer}>
                <div className={classes.creatorInfo}>
                    <div className={classes.creatorImage}><img src={props.aboutCreatorData.imgSrc} alt="" /></div>
                    <div className={classes.creatorName}>{props.aboutCreatorData.name}</div>
                    <div className={classes.creatorWhoIs}>{props.aboutCreatorData.whoIs}</div>
                </div>
                <div className={classes.creatorParagraf}>
                    <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(props.aboutCreatorData.paragraf) }}></p>
                    <span>{props.aboutCreatorData.prescription}</span>
                </div>
            </div>
        </>
    )
}

export default AboutCreatorBlock;