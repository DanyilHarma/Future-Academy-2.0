import classes from "./owlAll.module.css"
import owlImg from "../../../assets/images/courses-images/owl-small.png"
import unionSmall from "../../../assets/images/images-all-courses-page/images-chess-page/Union.png"
import { useSelector } from "react-redux"
import DOMPurify from "dompurify"
import LazyLoad from "react-lazyload"


const OwlAll = (props) => {

    const texts = useSelector(state => state.owl)

    const sanitizedContent = DOMPurify.sanitize(texts.smallText)

    const isCoursePage = props.pageConfig?.isCoursePage || false;
    const isEventPage = props.pageConfig?.isEventPage || false;
    const isAboutPage = props.pageConfig?.isAboutPage || false;
    const isCareerPage = props.pageConfig?.isCareerPage || false;

    const getOwlClass = () => {
        return (isCoursePage || isEventPage || isCareerPage) ? classes.owlImage : classes.aboutOwlImage
    }

    const getUnionClass = () => {
        return (isCoursePage || isEventPage || isCareerPage) ? classes.unionText : classes.unionAboutText
    }

    const getUnionImage = () => {
        return (isCoursePage || isEventPage || isCareerPage) && !isAboutPage ? unionSmall : "https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/images-about-page/Union.png?raw=true"
    }

    return (
        <div className={classes.containerOwl}>
            <LazyLoad offset={100}><img src={owlImg} alt="" className={getOwlClass()} /></LazyLoad>
            <div className={classes.containerAboutUnion}>
                {(isCoursePage || isEventPage || isCareerPage) && !isAboutPage ? null : (<span className={classes.unionBigText} dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(texts.bigText) }}></span>)}
                <span className={getUnionClass()} dangerouslySetInnerHTML={{ "__html": sanitizedContent }}></span>
                <LazyLoad offset={100}><img src={getUnionImage()} alt="" className={classes.unionImage} /></LazyLoad>
            </div>
        </div>
    )
}

export default OwlAll;