import DOMPurify from "dompurify"
import classes from "./infoBlock.module.css"

const InfoBlock = (props) => {

    const { title, paragrafAboutCourse, chessInfoSections } = props.infoData

    const sanitizedContent = DOMPurify.sanitize(paragrafAboutCourse)

    return (
        <div className="container">
            <div className={classes.aboutChessContainer}>
                <h2>{title}</h2>
                <article dangerouslySetInnerHTML={{ "__html": sanitizedContent }}></article>
            </div>
            <div className={classes.chessSection}>
                {chessInfoSections.map((section, index) => (
                    <div key={index} className={classes.chessSectionContent}>
                        <img src={section.imgSrc} alt="" />
                        <span dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(section.text) }}></span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfoBlock;