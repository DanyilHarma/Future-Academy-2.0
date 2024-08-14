import starImage from "../../assets/images/reviews-images/Star 1.png"
import reviewImage1 from "../../assets/images/reviews-images/Ellipse 185.png"
import reviewImage2 from "../../assets/images/reviews-images/Ellipse 185 (1).png"
import reviewImage3 from "../../assets/images/reviews-images/Ellipse 185 (2).png"
import reviewImage4 from "../../assets/images/reviews-images/Ellipse 185 (3).png"
import reviewImage5 from "../../assets/images/reviews-images/Ellipse (4).png"
import reviewImage6 from "../../assets/images/reviews-images/Ellipse (3).png"
import reviewImage7 from "../../assets/images/reviews-images/Ellipse (2).png"
import reviewImage8 from "../../assets/images/reviews-images/Ellipse (8).png"

let initialState = {
    rewiewDataHomepage: [
        {
            id: 1,
            imgSrc: reviewImage1,
            name: "Ирина Сухолапова",
            course: 'Студент курса "WEB-разработчик"',
            text: `Поддержка IT-отрасли - это не только финансовые инвестиции, но, прежде всего, подготовка и
                        предоставление широкого спектра образовательных услуг по подготовке и повышению квалификации
                        действующего персонала.Образование является движущей силой развития общества. Крайне важно, чтобы
                        современная система знаний.`,
            rating: {
                imgSrc: starImage,
                stars: "4,50 / 5"
            }
        },
        {
            id: 2,
            imgSrc: reviewImage2,
            name: "Ольга Убивака",
            course: 'Студент курса "Иностранные языки"',
            text: `Преподавания давала детям целостную картину мира давала возможность
            понимание процессов, погружала их умы и в глубины теории, и в практическую деятельность.`,
            rating: {
                imgSrc: starImage,
                stars: "4,77 / 5"
            }
        },
        {
            id: 3,
            imgSrc: reviewImage3,
            name: "Елена Кучурган",
            course: 'Студент курса "Шахматы для всех',
            text: `В Академии
                    Будущего ХОД я увидел очень важную миссию – развитие интеллекта через программирование, шахматы,
                    моделирование 3D-пространства. Увлечь ребенка книгами сейчас не очень просто, а вот применение
                    возможностей компьютерных технологий для тренировки памяти, мышления, внимания, воображения
                    открывает большие перспективы в обучении.`,
            rating: {
                imgSrc: starImage,
                stars: "4,6 / 5"
            }
        },
        {
            id: 4,
            imgSrc: reviewImage4,
            name: "Мария Ломоносикова",
            course: 'Студент курса "Роботостроение"',
            text: `Педагогические подходы, которые легли в основу образовательной структуры Академии, помогают грамотно
                    формировать личность ребенка, дают возможность сориентироваться в мире современных профессий и
                    станут важным началом в становлении успешного человека: открытого миру и науке.`,
            rating: {
                imgSrc: starImage,
                stars: "4 / 5"
            }
        },
        {
            id: 5,
            imgSrc: reviewImage5,
            name: "Михаил Стремов",
            course: 'Студент курса "Роботостроение"',
            text: `Я рад сотрудничеству с перспективной организацией, с которой мы сможем вместе позитивно влиять на
                    современное поколение.`,
            rating: {
                imgSrc: starImage,
                stars: "4,8 / 5"
            }
        },
        {
            id: 6,
            imgSrc: reviewImage6,
            name: "Сергей Пивососов",
            course: 'Студент курса "3D-моделирование"',
            text: `В летний период Нижегородский кампус Высшей Школы Экономики и Академия Будущего Ход организовали и
                    успешно провели несколько каникулярных программ. IT-проект получился очень интересным и
                    продуктивным.`,
            rating: {
                imgSrc: starImage,
                stars: "4,1 / 5"
            }
        },
        {
            id: 7,
            imgSrc: reviewImage7,
            name: "Анастасия Предалая",
            course: 'Студент курса "Робототехника"',
            text: `Желаю успехов и удачи Академия Будущего "ХОД". Пусть исполнятся все цели и мечты! Покорения самых
                    больших высот! Спасибо за развитие и любовь к шахматам и нашему светлому будущему!`,
            rating: {
                imgSrc: starImage,
                stars: "4,9 / 5"
            }
        },
        {
            id: 8,
            imgSrc: reviewImage8,
            name: "Евгения Вольф",
            course: 'Студент курса "Программирование"',
            text: `В новом учебном году нас ждут другие совместные проекты и мероприятия с Академией Будущего. Их курсы
                    по программированию на Python, UI/UX-дизайну и Web-разработке станут отличной возможностью для ребят
                    получить массу полезных IT-навыков и примерить на себя профессию айтишника.`,
            rating: {
                imgSrc: starImage,
                stars: "4,7 / 5"
            }
        },
    ]
}

let reviewsHomepageReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;

    }
}

export default reviewsHomepageReducer;