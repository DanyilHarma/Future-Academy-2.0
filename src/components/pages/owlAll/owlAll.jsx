import classes from "./owlAll.module.css"
import owlImg from "../../../assets/images/courses-images/owl-small.png"
import unionSmall from "../../../assets/images/images-all-courses-page/images-chess-page/union-price.png"
import { useSelector } from "react-redux"
import DOMPurify from "dompurify"

const OwlAll = (props) => {

    const texts = useSelector(state => state.owl)

    const sanitizedContent = DOMPurify.sanitize(texts.smallText)

    return (
        <div className={classes.containerOwl}>
            <img src={owlImg} alt="" className={classes.owlImage} />
            <div className={classes.containerAboutUnion}>
                <span className={classes.unionText} dangerouslySetInnerHTML={{ "__html": sanitizedContent }}></span>
                <img src={unionSmall} alt="" className={classes.unionImage} />
            </div>
        </div>
    )
}

export default OwlAll;