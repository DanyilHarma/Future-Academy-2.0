import image from "../assets/images/header-top-images/Group 14.png"

let initialState = {
    firstLi: [
        {
            src: "",
            imgSrc: image,
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
    ],

    secondLi: [
        {
            src: "+37368432044",
            text: "+37368432044"
        },
        {
            src: "/main-landing/form-header/index.html",
            text: "Войти"
        }
    ]
}

const liHeaderReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state;
    }
}

export default liHeaderReducer;