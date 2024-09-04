import image from "../../assets/images/images-all-courses-page/002-mobile-app.png"
import image1 from "../../assets/images/images-all-courses-page/001-gamepad.png"
import image2 from "../../assets/images/images-all-courses-page/003-web-development.png"
import image3 from "../../assets/images/images-all-courses-page/004-digital.png"
import image4 from "../../assets/images/images-all-courses-page/free-icon-chess-140469.png"
import image5 from "../../assets/images/images-all-courses-page/005-curve.png"
import image6 from "../../assets/images/images-all-courses-page/free-icon-english-language-1378036.png"
import image7 from "../../assets/images/images-all-courses-page/free-icon-blog-3959420.png"
import image8 from "../../assets/images/images-all-courses-page/soft-skills.png"
import image9 from "../../assets/images/images-all-courses-page/free-icon-exam-895984.png"
import image10 from "../../assets/images/images-all-courses-page/free-icon-foreign-language-7177941.png"
import image13 from "../../assets/images/images-all-courses-page/free-icon-programming-4861897.png"

const SET_DIFFICULT = "SET_DIFFICULT";
const SET_EDUCATION = "SET_EDUCATION";
const SET_CATEGORY = "SET_CATEGORY";
const SET_DURATION = "SET_DURATION";

let initialState = {
    difficult: "all",
    education: "all",
    category: "all",
    duration: [1, 24],
    courses: [
        {
            id: "testing",
            name: `«Тестировщик ПО»`,
            imgSrc: "https://cdn-icons-png.flaticon.com/128/5958/5958925.png",
            text: `Тестировщик ПО обеспечивает качество программных продуктов, находя ошибки  и проверяя их работоспособность.`,
            difficult: "user",
            education: "profession",
            category: ["children"],
            duration: 12,
            backgroundColor: "#B8EFCF",
        },
        {
            id: "mobileDev",
            name: `«Разработка мобильных <br> приложений»`,
            imgSrc: image,
            text: `Разработчик мобильных приложений создаёт <br> приложения, которыми 
            люди ежедневно пользуются<br>на смартфонах, умных часах и планшетах.`,
            difficult: "cheater",
            education: "profession",
            category: ["teenager"],
            duration: 24,
            backgroundColor: "#C7EEFF",
        },
        {
            id: "gameDev",
            name: "«Создание игр»",
            imgSrc: image1,
            text: `Курс, который обучит вас разработке игр, включает программирование, дизайн, анимацию
                        и звук. Разработан профессионалами индустрии.`,
            difficult: "cheater",
            education: "profession",
            category: ["children", "teenager"],
            duration: 12,
            sale: "-10%",
            backgroundColor: "#FFCE94"
        },
        {
            id: 3,
            name: "«Web-разработка»",
            imgSrc: image2,
            text: `Курс, который обучит вас веб-разработке, включает HTML, CSS, JavaScript и создание
                                    сайтов. Разработан профессионалами отрасли.`,
            difficult: "proffessional",
            education: "profession",
            category: "teenager",
            duration: 6,
            backgroundColor: "#FFE38E"
        },
        {
            id: 4,
            name: "«Мультимедиа»",
            imgSrc: image3,
            text: `Курс, который обучит вас мультимедиа, включает создание и редактирование видео, аудио
                                    и графики. Разработан профессионалами индустрии.`,
            difficult: "newbie",
            education: "profession",
            category: ["children", "teenager"],
            duration: 6,
            backgroundColor: "#DDDDFF"
        },
        {
            id: "chess",
            name: "«Шахматы»",
            imgSrc: image4,
            text: `Курс, который обучит вас шахматам, включает стратегии, тактику и решения задач.
                                    Разработан опытными шахматистами.`,
            difficult: "newbie",
            education: "course",
            category: ["children"],
            duration: 3,
            sale: "-10%",
            backgroundColor: "#B8EFCF",
        },
        {
            id: 6,
            name: "«3D-моделирование и дизайн»",
            imgSrc: image5,
            text: `Курс, который обучит вас 3D моделированию и дизайну, включает создание и рендеринг
                                    моделей. Разработан профессионалами отрасли.`,
            difficult: "user",
            education: "profession",
            category: ["teenager", "adult"],
            duration: 6,
            sale: "-10%",
            backgroundColor: "#C7EEFF"
        },
        {
            id: 7,
            name: "«Английский язык»",
            imgSrc: image6,
            text: `Курс, который обучит вас английскому языку, включает грамматику, разговорную практику
                                    и аудирование. Разработан опытными лингвистами.`,
            difficult: "newbie",
            education: "course",
            category: ["children"],
            duration: 12,
            backgroundColor: "#C5DDFF"
        },
        {
            id: 8,
            name: "«Блогинг»",
            imgSrc: image7,
            text: `Курс, который обучит вас блогингу, включает создание контента, продвижение и
                                    монетизацию. Разработан успешными блогерами.`,
            difficult: "newbie",
            education: "course",
            category: ["children", "teenager"],
            duration: 1,
            backgroundColor: "#FFE9A8"
        },
        {
            id: 9,
            name: "«Soft-skills»",
            imgSrc: image8,
            text: `Курс, который обучит вас софт-скиллами, включает коммуникацию, управление временем и
                                    работу в команде. Разработан профессионалами.`,
            difficult: "newbie",
            education: "course",
            category: ["children", "teenager"],
            duration: 2,
            sale: "-10%",
            backgroundColor: "#FFEEF6"
        },
        {
            id: 10,
            name: "«Подготовка к ЕГЭ»",
            imgSrc: image9,
            text: `Курс, который поможет вам подготовиться к ЕГЭ, включает все необходимые предметы и
                                    практические задания.`,
            difficult: "user",
            education: "course",
            category: "teenager",
            duration: 3,
            backgroundColor: "#DDDDFF"
        },
        {
            id: 11,
            name: "«Иностранные языки»",
            imgSrc: image10,
            text: `Курс, который обучит вас софт- скиллами, включает коммуникацию, управление временем и
                                    работу в команде.Разработан профессионалами.`,
            difficult: "user",
            education: "course",
            category: ["adult"],
            duration: 24,
            backgroundColor: "#C5DDFF"
        },
        {
            id: 12,
            name: "«Программирование»",
            imgSrc: image13,
            text: `Курс, который обучит вас программированию, включает основы, структуры данных и разработку приложений.Разработан опытными разработчиками.`,
            difficult: "user",
            education: "profession",
            category: ["children", "teenager", "adult"],
            duration: 8,
            sale: "-10%",
            backgroundColor: "#FFEEF6"
        },
        {
            id: 13,
            name: "«Разработчик игр на Unity»",
            imgSrc: "https://cdn-icons-png.flaticon.com/128/5969/5969346.png",
            text: `Изучите создание игр на Unity с нуля. Программирование, физика, анимация и дизайн уровней - все это станет частью вашего пути .`,
            difficult: "user",
            education: "profession",
            category: ["adult"],
            duration: 12,
            backgroundColor: "#9370DB"
        },
        {
            id: 14,
            name: "«Разработка ПО»",
            imgSrc: "https://cdn-icons-png.flaticon.com/128/9104/9104596.png",
            text: `Овладейте основами разработки программного обеспечения. Программирование, тестирование и создание приложений - всё это будет частью вашего обучения.`,
            difficult: "proffessional",
            education: "profession",
            category: ["adult"],
            duration: 16,
            backgroundColor: "#ADD8E6"
        },
        {
            id: 15,
            name: "«Робототехника»",
            imgSrc: "https://cdn-icons-png.flaticon.com/128/1693/1693746.png",
            text: `Изучите основы создания и программирования роботов. Конструирование, сенсоры и программирование автоматизированных систем станут частью вашего обучения.`,
            difficult: "proffessional",
            education: "profession",
            category: ["adult"],
            duration: 16,
            backgroundColor: "#B0E0E6"
        },
        {
            id: 16,
            name: "«Java-разработчик»",
            imgSrc: "https://cdn-icons-png.flaticon.com/128/14/14427.png",
            text: `Освойте язык программирования Java. Работа с базами данных, разработка веб-приложений и объектно-ориентированное программирование - всё это станет частью вашего пути.`,
            difficult: "user",
            education: "profession",
            category: ["adult"],
            duration: 20,
            backgroundColor: "#FFCC99"
        },
        {
            id: 16,
            name: "«Python–разработчик»",
            imgSrc: "https://cdn-icons-png.flaticon.com/128/1822/1822921.png",
            text: `Освойте язык программирования Python. Изучите основы работы с данными, веб-разработку и автоматизацию задач - всё это станет частью вашего обучения.`,
            difficult: "user",
            education: "profession",
            category: ["adult"],
            duration: 12,
            backgroundColor: "#FFE4B5"
        },
        {
            id: 16,
            name: "«iOS–разработчик»",
            imgSrc: "https://cdn-icons-png.flaticon.com/128/1241/1241013.png",
            text: `Изучите разработку приложений для iOS с использованием Swift. Научитесь создавать современные мобильные приложения для iPhone и iPad.`,
            difficult: "user",
            education: "profession",
            category: ["adult"],
            duration: 12,
            backgroundColor: "#B0C4DE"
        }
    ]

}

const coursePageFiltersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIFFICULT:
            return {
                ...state, difficult: action.event
            }
        case SET_EDUCATION:
            return {
                ...state, education: action.event
            }
        case SET_CATEGORY:
            return {
                ...state, category: action.event
            }
        case SET_DURATION:
            return {
                ...state, duration: action.duration
            }
        default: return state
    }
}

export const setDifficult = (event) => ({ type: SET_DIFFICULT, event });
export const setEducation = (event) => ({ type: SET_EDUCATION, event });
export const setCategory = (event) => ({ type: SET_CATEGORY, event });
export const setDuration = (duration) => ({ type: SET_DURATION, duration });

export default coursePageFiltersReducer;