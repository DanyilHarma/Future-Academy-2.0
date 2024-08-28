import image1 from "../../assets/images/images-all-events/free-icon-queen-5077064.png"
import image2 from "../../assets/images/images-all-events/free-icon-programing-2463459.png"
import image3 from "../../assets/images/images-all-events/free-icon-board-game-2829206.png"
import image4 from "../../assets/images/images-all-events/DALL·E 2024-06-11 17.32.26.webp"
import image5 from "../../assets/images/images-all-events/DALL·E 2024-06-11 18.01.30.jpg"
import image6 from "../../assets/images/images-all-events/free-icon-it-12443999.png"
import image7 from "../../assets/images/images-all-events/free-icon-qr-code-3081127.png"
import image8 from "../../assets/images/images-all-events/free-icon-web-design-13191231.png"

const initialState = {
    events: {
        firstRow: [
            {
                id: 1, event: "Турнир", imgSrc: image1, name: "Ход королевы", text: `Приглашаем на Шахматный Фестиваль "Ход Королевы"! Вас ждут турниры, мастер-классы от
            гроссмейстеров и интерактивные игры. Испытайте свои силы и насладитесь атмосферой!`, date: "22 июня 2024", backgroundColor: "#C7EEFF"
            },
            {
                id: 2, event: "Встреча", imgSrc: image2, name: "Хакатон для начинающих программистов", text: `Погрузитесь в мир программирования на нашем Хакатоне! Увлекательные задания, командная
            работа и поддержка опытных менторов. Отличный шанс развить навыки и найтиединомышленников!`, date: "28 июня 2024", backgroundColor: "#FFE38E"
            },
            {
                id: 3, event: "Интенсив", imgSrc: image3, name: "GameDev", text: `Узнайте, как создать свою первую игру за один уикенд! Практические занятия, советы от
            экспертов и живое общение с единомышленниками. Начните свой путь в геймдеве прямо сейчас!`, date: "5 июля 2024", backgroundColor: "#DDDDFF"
            }
        ],
        secondRow: [
            {
                id: 4, event: "Вебинар", imgSrc: image4, name: "Современные технологии веб-разработки", text: `Приглашаем вас на вебинар, посвященный современным технологиям веб-разработки. Узнайте о
            новейших трендах, инструментах и подходах в создании веб-приложений. На вебинаревыступят опытные разработчики, которые поделятся своим опытом и знаниями. Не упустите
            возможность улучшить свои навыки и задать вопросы профессионалам.`, date: "10 июля 2024", backgroundColor: "#7acaff", imageBack: false, bigBlock: true
            },
            {
                id: 5, event: "Кибервстреча", imgSrc: image5, text: `Погрузитесь в мир программирования на нашем Хакатоне! Увлекательные задания, командная
            работа и поддержка опытных менторов. Отличный шанс развить навыки и найтиединомышленников!`, date: "12 июля 2024", backgroundColor: "#FFEEF6", imageBack: true, bigBlock: false
            }
        ],
        thirdRow: [
            {
                id: 6, event: "Мероприятие", imgSrc: image6, name: "День IT-инноваций", text: `Присоединяйтесь к нам на День IT-инноваций! Откройте для себя новейшие технологии,
            узнайте о трендах в IT-индустрии и пообщайтесь с лидерами рынка.`, date: "20 июля 2024", backgroundColor: "#C5DDFF"
            },
            {
                id: 7, event: "Мастер-класс", imgSrc: image7, name: "Креативный кодинг", text: `Приглашаем на Креативный кодинг! Исследуйте искусство программирования, участвуйте в
            творческих воркшопах и развивайте свои навыки в уникальной атмосфере.`, date: "30 июля 2024", backgroundColor: "#FFEEF6"
            },
            {
                id: 8, event: "Интенсив", imgSrc: image8, name: "Дизайн-интенсив", text: `Присоединяйтесь к нашему Дизайн-интенсиву! Погрузитесь в мир графического дизайна,
            участвуйте в мастер-классах и создавайте уникальные проекты.`, date: "5 августа 2024", backgroundColor: "#FFCE94"
            }
        ]
    }
}

const eventsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default eventsPageReducer;