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
            label: "Робототехника",
            link: ""
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
            label: "Создание игр",
            link: ""
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
            label: "Шашки",
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
            label: "Прикладное программирование",
            link: ""
        },
        {
            label: "Графическое моделирование",
            link: ""
        },
        {
            label: "Game Development",
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
            label: "Создание игр",
            link: ""
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
            label: "Чапаев",
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
            label: "Графический Дизайн",
            link: ""
        },
        {
            label: "Тестировщик ПО",
            link: ""
        },
        {
            label: "Интернет Маркетинг",
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
            link: ""
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