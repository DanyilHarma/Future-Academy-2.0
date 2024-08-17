import coursesImage from "../assets/images/header-top-images/Group 14.png"
import coursesImageLight from "../assets/images/header-top-images/Group 14L.png"

import enterImage from "../assets/images/header-top-images/Group 593.png"
import enterImageLight from "../assets/images/header-top-images/Group 593L.png"

import arrowImage from "../assets/images/header-top-images/Vector 197.png"
import arrowImageLight from "../assets/images/header-top-images/Vector 197L.png"
import geoImage from "../assets/images/header-top-images/Group 830.png"
import geoImageLight from "../assets/images/header-top-images/Group 830L.png"

let initialState = {
    firstLi: [
        {
            link: "/coursesAllPage",
            imgSrc: {
                darkImage: coursesImage,
                lightImage: coursesImageLight
            },
            text: "Все курсы"
        },
        {
            link: "/main-landing/all-events/index.html",
            text: "Мероприятия"
        },
        {
            link: "/main-landing/news/index.html",
            text: "Новости"
        },
        {
            link: "",
            text: "Карьера"
        },
    ],

    secondLi: [
        {
            link: "+37368432044",
            text: "+37368432044"
        },
        {
            link: "/main-landing/form-header/index.html",
            imgSrcSecond: {
                darkImage: enterImage,
                lightImage: enterImageLight
            },
            text: "Войти"
        }
    ],
    popup:
    {
        imgSrc: {
            geoImage: { geoImage, geoImageLight },
            arrowImage: { arrowImage, arrowImageLight }
        }
    }

}

const liHeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default liHeaderReducer;