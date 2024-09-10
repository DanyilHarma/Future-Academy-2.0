import coursesImage from "../assets/images/header-top-images/Group 14.png"
import coursesImageLight from "../assets/images/header-top-images/Group 14L.png"

import enterImage from "../assets/images/header-top-images/Group 593.png"
import enterImageLight from "../assets/images/header-top-images/Group 593L.png"

import arrowImage from "../assets/images/header-top-images/Vector 197.png"
import arrowImageLight from "../assets/images/header-top-images/Vector 197L.png"
import geoImage from "../assets/images/header-top-images/Group 830.png"
import geoImageLight from "../assets/images/header-top-images/Group 830L.png"

const SET_INDICATOR_POSITION = "SET_INDICATOR_POSITION";

let initialState = {
    firstLi: [
        {
            link: "/coursesAllPage",
            imgSrc: {
                darkImage: coursesImage,
                lightImage: coursesImageLight
            },
            text: "Все курсы",
            isSelected: null
        },
        {
            link: "/allEvents",
            text: "Мероприятия",
            isSelected: false
        },
        {
            link: "/news",
            text: "Новости",
            isSelected: false
        },
        {
            link: "/careerPage",
            text: "Карьера",
            isSelected: false
        },
    ],

    secondLi: [
        {
            link: "tel:+37368432044",
            text: "+37368432044"
        },
        {
            link: "/enter",
            imgSrcSecond: {
                darkImage: enterImage,
                lightImage: enterImageLight
            },
            text: "Войти",
            isSelected: false
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
        case SET_INDICATOR_POSITION:
            return {
                ...state,
                firstLi: state.firstLi.map((item, index) =>
                    index === action.index ? { ...item, isSelected: true } : { ...item, isSelected: false }
                ),
                secondLi: state.secondLi.map((item, index) =>
                    index === action.index ? { ...item, isSelected: true } : { ...item, isSelected: false }
                )

            }
        default: return state;
    }
}

export const setIndicatorPosition = (index) => ({ type: SET_INDICATOR_POSITION, index })

export default liHeaderReducer;