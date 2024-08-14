import { useSelector } from "react-redux"
import ListNav from "./listNavigation/listNavigation"
import PopupCity from "./listNavigation/popupCity/popupCity"
import classes from "./navigation.module.css"


const Navigation = (props) => {
    const firstLi = useSelector(state => state.liHeader.firstLi);
    const secondLi = useSelector(state => state.liHeader.secondLi);

    let firstLiElements = firstLi.map((list, index) => (<ListNav key={index} src={list.src} imgSrc={list.imgSrc} text={list.text} />))
    let secondLiElements = secondLi.map((list, index) => (<ListNav key={index} src={list.src} imgSrc={list.imgSrc} text={list.text} />))
    return (
        <div className={classes.nav}>
            <ul className={classes.firstLi}>
                {firstLiElements}
            </ul>
            <ul className={classes.secondLi}>
                <PopupCity />
                {secondLiElements}
            </ul>
        </div>
    )
}



export default Navigation;