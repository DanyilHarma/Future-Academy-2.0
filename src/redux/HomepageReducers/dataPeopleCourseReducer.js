import childImage from "../../assets/images/courses-images/children.png"
import teenagersImage from "../../assets/images/courses-images/children (1).png"
import adultImage from "../../assets/images/courses-images/family.png"

let initialState = {
    people: [{
        imgSrc: childImage,
        title: "Дети",
        age: "8 — 14 лет"
    },
    {
        imgSrc: teenagersImage,
        title: "Подростки",
        age: "8 — 14 лет"
    },
    {
        imgSrc: adultImage,
        title: "Взрослые",
        age: "18 — ∞"
    }]
}

let dataPeopleCourseReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;

    }
}

export default dataPeopleCourseReducer;