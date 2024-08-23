import classes from "./owlAll.module.css"
import owlImg from "../../../assets/images/courses-images/owl-small.png"
import unionSmall from "../../../assets/images/images-chess-page/Union.png"
import { useSelector } from "react-redux"

const OwlAll = (props) => {

    const texts = useSelector(state => state.owl)

    return (
        <div className={classes.containerOwl}>
            <img src={owlImg} alt="" className={classes.owlImage} />
            <div className={classes.containerAboutUnion}>
                <span className={classes.unionText} dangerouslySetInnerHTML={{ "__html": texts.smallText }}></span>
                <img src={unionSmall} alt="" className={classes.unionImage} />
            </div>
        </div>
    )
}

export default OwlAll;