import logoImage from "./../assets/images/footer/Group 802.png"
import sicietyImage1 from "./../assets/images/footer/vk.png"
import sicietyImage2 from "./../assets/images/footer/instagram.png"
import sicietyImage3 from "./../assets/images/footer/facebook.png"
import sicietyImage4 from "./../assets/images/footer/youtube.png"
import sicietyImage5 from "./../assets/images/footer/telegram.png"

let initialState = {
    logo:
    {
        imgSrc: logoImage
    }
    ,
    children: [
        {
            label: "Тестировщик ПО",
            link: "/coursesAllPage/testing"
        },
        {
            label: "Создание игр",
            link: "/coursesAllPage/gameDev"
        },
        {
            label: "Программирование",
            link: ""
        },
        {
            label: "Мультимедиа",
            link: ""
        },
        {
            label: "Soft skills",
            link: ""
        },
        {
            label: "Шахматы",
            link: "/coursesAllPage/chess"
        },
        {
            label: "Блогинг",
            link: ""
        },
        {
            label: "Анлийский язык",
            link: ""
        }
    ]
    ,
    teenagers: [
        {
            label: "Web-разработка",
            link: ""
        },
        {
            label: "3-D моделирование и дизайн",
            link: ""
        },
        {
            label: "Создание игр",
            link: ""
        },
        {
            label: "Soft skills",
            link: ""
        },
        {
            label: "Разработчик мобильных приложений",
            link: "/coursesAllPage/mobileDev"
        },
        {
            label: "Блогинг",
            link: ""
        },
        {
            label: "Программирование",
            link: ""
        },
        {
            label: "Мультимедиа",
            link: ""
        }
    ],
    adults: [
        {
            label: "Разработчик игр на Unity",
            link: ""
        },
        {
            label: "Разработка ПО",
            link: ""
        },
        {
            label: "3-D моделирование и дизайн",
            link: ""
        },
        {
            label: "Робототехника",
            link: ""
        },
        {
            label: "Иностранные языки",
            link: ""
        },
        {
            label: "Java-разработчик",
            link: ""
        },
        {
            label: "Python–разработчик",
            link: ""
        },
        {
            label: "IOS-разработчик",
            link: ""
        },
        {
            label: "Программирование",
            link: ""
        }
    ],
    informations: [
        {
            label: "Об академии",
            link: "/aboutAcademy"
        },
        {
            label: "Мероприятия",
            link: "/allEvents"
        },
        {
            label: "Новости",
            link: "/news"
        },
        {
            label: "База знаний",
            link: "/coursesAllPage"
        },
        {
            label: "Карьера",
            link: "/careerPage"
        },
        {
            label: "Контакты",
            link: "/contacts"
        }
    ],
    society: [
        {
            imgSrc: sicietyImage1,
            link: ""
        },
        {
            imgSrc: sicietyImage2,
            link: ""
        },
        {
            imgSrc: sicietyImage3,
            link: ""
        },
        {
            imgSrc: sicietyImage4,
            link: ""
        },
        {
            imgSrc: sicietyImage5,
            link: ""
        }
    ]
}

let FooterReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;

    }
}


export default FooterReducer;