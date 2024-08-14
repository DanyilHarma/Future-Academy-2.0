import childImage from "../../assets/images/courses-images/children.png"
import teenagersImage from "../../assets/images/courses-images/children (1).png"
import adultImage from "../../assets/images/courses-images/family.png"

const CHANGE_SECTION_BLOCK = "CHANGE_SECTION_BLOCK";

let initialState = {
    people: [{
        id: 1,
        imgSrc: childImage,
        title: "Дети",
        age: "8 — 14 лет"
    },
    {
        id: 2,
        imgSrc: teenagersImage,
        title: "Подростки",
        age: "8 — 14 лет"
    },
    {
        id: 3,
        imgSrc: adultImage,
        title: "Взрослые",
        age: "18 — ∞"
    }],
    sections: {
        childrenSection: {
            id: 1,
            coursesFirstRow: ["Робототехника", "Создание игр", "Web-разработка", "Мультимедиа", "Шахматы"],
            coursesSecondRow: ["3D-моделирование и дизайн", "Английский язык", "Блогинг", "Soft skills"]
        },
        teenagerSection: {
            id: 2,
            coursesFirstRow: ["Иностранные языки", "Создание игр", "Интенсивы", "Подготовка к ЕГЭ", "Шахматы"],
            coursesSecondRow: ["3D-моделирование и дизайн", "Английский язык", "Блогинг", "Soft skills"]
        },
        adultSection: {
            id: 3,
            coursesFirstRow: ["Робототехника", "Мастер классы", "Web-разработка", "Программирование", "Шахматы"],
            coursesSecondRow: ["3D-моделирование и дизайн", "Интенсивы", "Блогинг"]
        }
    },
    currentSection: {
        coursesFirstRow: ["Робототехника", "Создание игр", "Web-разработка", "Мультимедиа", "Шахматы"],
        coursesSecondRow: ["3D-моделирование и дизайн", "Английский язык", "Блогинг", "Soft skills"]
    }
}

const coursesBlockReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_SECTION_BLOCK:
            const selectedSection = Object.values(state.sections).find(section => section.id === action.id)
            return {
                ...state,
                currentSection: selectedSection
            }
        default: return state
    }
}

export const changeSectionBlock = (id) => ({ type: CHANGE_SECTION_BLOCK, id })

export default coursesBlockReducer;