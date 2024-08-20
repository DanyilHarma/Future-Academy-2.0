import { useDispatch, useSelector } from "react-redux"
import ListNav from "./listNavigation/listNavigation"
import PopupCity from "./listNavigation/popupCity/popupCity"
import classes from "./navigation.module.css"
import { setIndicatorPosition } from "../../../redux/liHeaderReducer"


const Navigation = (props) => {

    const dispatch = useDispatch();
    const firstLi = useSelector(state => state.liHeader.firstLi);
    const secondLi = useSelector(state => state.liHeader.secondLi);
    const { geoImage, arrowImage } = useSelector(state => state.liHeader.popup.imgSrc)

    const handlerChangePositionIndicator = (index, event) => {
        const elementPosition = event.currentTarget.offsetLeft - 10;
        props.onIndicatorMove(elementPosition)
        dispatch(setIndicatorPosition(index))
    }

    return (
        <div className={classes.nav}>
            <ul className={!props.isAlternate ? classes.firstLi : classes.firstLiLight}>
                {firstLi.map((list, index) =>
                (<ListNav key={index} link={list.link} imgSrc={list.imgSrc}
                    text={list.text} isAlternate={props.isAlternate} isSelected={list.isSelected}
                    onClick={(event) => handlerChangePositionIndicator(index, event)} />))}
            </ul>
            <ul className={!props.isAlternate ? classes.secondLi : classes.secondLiLight}>
                <PopupCity isAlternate={props.isAlternate} geoImage={geoImage} arrowImage={arrowImage} />
                {secondLi.map((list, index) =>
                (<ListNav key={index} link={list.link} imgSrc={list.imgSrcSecond}
                    text={list.text} isAlternate={props.isAlternate} isSelected={list.isSelected}
                    onClick={(event) => handlerChangePositionIndicator(index + firstLi.length, event)} />))}
            </ul>
        </div>
    )
}



export default Navigation;