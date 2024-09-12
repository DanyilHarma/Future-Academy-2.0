import classes from "./owlAll.module.css"
import owlImg from "../../../assets/images/courses-images/owl-small.png"
import unionSmall from "../../../assets/images/images-all-courses-page/images-chess-page/Union.png"
import { useSelector } from "react-redux"
import DOMPurify from "dompurify"



const OwlAll = (props) => {

    const texts = useSelector(state => state.owl)

    const sanitizedContent = DOMPurify.sanitize(texts.smallText)

    const isCoursePage = props.pageConfig?.isCoursePage || false;
    const isEventPage = props.pageConfig?.isEventPage || false;
    const isAboutPage = props.pageConfig?.isAboutPage || false;
    const isCareerPage = props.pageConfig?.isCareerPage || false;
    const isCampPage = props.pageConfig?.isCampPage || false;

    const getOwlClass = () => {
        return (isCoursePage || isEventPage || isCareerPage || isCampPage) ? classes.owlImage : classes.aboutOwlImage
    }

    const getUnionClass = () => {
        return (isCoursePage || isEventPage || isCareerPage || isCampPage) ? classes.unionText : classes.unionAboutText
    }

    const getUnionImage = () => {
        return (isCoursePage || isEventPage || isCareerPage || isCampPage) && !isAboutPage ? unionSmall : "https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/images-about-page/Union.png?raw=true"
    }

    return (
        <div className={classes.containerOwl}>
            <img src={owlImg} alt="" className={getOwlClass()} />
            <div className={classes.containerAboutUnion}>
                {(isCoursePage || isEventPage || isCareerPage) && !isAboutPage ? null : (<span className={classes.unionBigText} dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(texts.bigText) }}></span>)}
                <span className={getUnionClass()} dangerouslySetInnerHTML={{ "__html": sanitizedContent }}></span>
                <img src={getUnionImage()} alt="" className={classes.unionImage} />
            </div>
        </div>
    )
}

export default OwlAll;