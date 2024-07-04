import ListNav from "./listNavigation/listNavigation"
import PopupCity from "./listNavigation/popupCity/popupCity"
import classes from "./navigation.module.css"

let firstLi = [
    {
        src: "/main-landing/all-courses/index.html",
        imgSrc: "/images/header-top-images/Group 14.png",
        text: "Все курсы"
    },
    {
        src: "/main-landing/all-events/index.html",
        text: "Мероприятия"
    },
    {
        src: "/main-landing/news/index.html",
        text: "Новости"
    },
    {
        src: "",
        text: "Карьера"
    },
]

let secondLi = [
    {
        src: "+37368432044",
        text: "+37368432044"
    },
    {
        src: "/main-landing/form-header/index.html",
        text: "Войти"
    }
]

let firstLiElements = firstLi.map((list, index) => (<ListNav key={index} src={list.src} imgSrc={list.imgSrc} text={list.text} />))
let secondLiElements = secondLi.map((list, index) => (<ListNav key={index} src={list.src} imgSrc={list.imgSrc} text={list.text} />))


const Navigation = (props) => {
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