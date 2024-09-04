import quantityImage1 from "../../assets/images/quantity-images/600.png"
import quantityImage2 from "../../assets/images/quantity-images/82.png"
import quantityImage3 from "../../assets/images/quantity-images/14 795.png"

import infoCardImage1 from "../../assets/images/section-info/newspaper.png"
import infoCardImage2 from "../../assets/images/section-info/diagram.png"


let initialState = {
    quantity: [
        {
            src: quantityImage1,
            text: "Курсов"
        },
        {
            src: quantityImage2,
            text: "Ведущих <br> преподавателей"
        },
        {
            src: quantityImage3,
            text: "Выпускников"
        }
    ],
    infoCards: [
        {
            imgSrc: infoCardImage1,
            title: "Новости Академии",
            link: "/news",
            backgroundColor: "#B8EFCF"
        },
        {
            imgSrc: infoCardImage2,
            title: "Мир IT",
            link: "/aboutAcademy",
            backgroundColor: "#FFEEF6"
        }
    ]
}

let actionsSectionReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;

    }
}

export default actionsSectionReducer;