import { useSelector } from "react-redux"
import ListNav from "./listNavigation/listNavigation"
import PopupCity from "./listNavigation/popupCity/popupCity"
import classes from "./navigation.module.css"


const Navigation = (props) => {

    const firstLi = useSelector(state => state.liHeader.firstLi);
    const secondLi = useSelector(state => state.liHeader.secondLi);
    const { geoImage, arrowImage } = useSelector(state => state.liHeader.popup.imgSrc)

    let firstLiElements = firstLi.map((list, index) => (<ListNav key={index} link={list.link} imgSrc={list.imgSrc} text={list.text} isAlternate={props.isAlternate} />))
    let secondLiElements = secondLi.map((list, index) => (<ListNav key={index} link={list.link} imgSrc={list.imgSrcSecond} text={list.text} isAlternate={props.isAlternate} />))

    return (
        <div className={classes.nav}>
            <ul className={!props.isAlternate ? classes.firstLi : classes.firstLiLight}>
                {firstLiElements}
            </ul>
            <ul className={!props.isAlternate ? classes.secondLi : classes.secondLiLight}>
                <PopupCity isAlternate={props.isAlternate} geoImage={geoImage} arrowImage={arrowImage} />
                {secondLiElements}
            </ul>
        </div>
    )
}



export default Navigation;