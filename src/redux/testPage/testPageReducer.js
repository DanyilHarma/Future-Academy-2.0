const SET_ANSWER = "SET_ANSWER";

let initialState = {
    questions: [
        {
            id: 1,
            question: "Какую задачу вы предпочли бы решить?",
            options: [
                { text: "Найти и исправить баги в программе", value: "testing" },
                { text: "Создать игровую механику", value: "gameDev" },
                { text: "Разработать веб-сайт", value: "webDev" },
                { text: "Смоделировать 3D-объект", value: "mobileDev" }
            ]
        },
        {
            id: 2,
            question: "Какой результат вам интереснее?",
            options: [
                { text: "Приложение без ошибок", value: "testing" },
                { text: "Интерактивная игра", value: "gameDev" },
                { text: "Адаптивный веб-сайт", value: "webDev" },
                { text: "Детализированная 3D-модель", value: "mobileDev" }
            ]
        },
        {
            id: 3,
            question: "Что вам больше нравится изучать?",
            options: [
                { text: "Тестовые сценарии", value: "testing" },
                { text: "Игровые движки", value: "gameDev" },
                { text: "Фронтенд-технологии", value: "webDev" },
                { text: "Инструменты для 3D-моделирования", value: "mobileDev" }
            ]
        },
        {
            id: 4,
            question: "Какую среду разработки вы бы выбрали?",
            options: [
                { text: "Инструменты для автоматизированного тестирования", value: "testing" },
                { text: "Игровые движки (Unity, Unreal Engine)", value: "gameDev" },
                { text: "Среды разработки для веб-программирования", value: "webDev" },
                { text: "Программы для 3D-моделирования (Blender, 3ds Max)", value: "mobileDev" }
            ]
        },
        {
            id: 5,
            question: "Что вам больше нравится в работе?",
            options: [
                { text: "Анализировать результаты тестов", value: "testing" },
                { text: "Разрабатывать увлекательные игровые механики", value: "gameDev" },
                { text: "Создавать интерфейсы и пользовательские взаимодействия", value: "webDev" },
                { text: "Создавать сложные 3D-объекты и анимации", value: "mobileDev" }
            ]
        },
        {
            id: 6,
            question: "Что вам ближе по духу?",
            options: [
                { text: "Тестирование приложений", value: "testing" },
                { text: "Создание игр с нуля", value: "gameDev" },
                { text: "Веб-дизайн и разработка сайтов", value: "webDev" },
                { text: "3D-анимация и графика", value: "mobileDev" }
            ]
        },
        {
            id: 7,
            question: "Какую задачу вы бы выбрали для изучения?",
            options: [
                { text: "Написать тесты для программы", value: "testing" },
                { text: "Разработать игровую логику", value: "gameDev" },
                { text: "Создать сайт с интерактивными элементами", value: "webDev" },
                { text: "Моделировать персонажа в 3D", value: "mobileDev" }
            ]
        },
        {
            id: 8,
            question: "Какую работу вы предпочли бы?",
            options: [
                { text: "Тестирование новых приложений", value: "testing" },
                { text: "Создание уровней в игре", value: "gameDev" },
                { text: "Разработка интерфейсов веб-сайтов", value: "webDev" },
                { text: "Создание 3D-анимации", value: "mobileDev" }
            ]
        },
        {
            id: 9,
            question: "Что вас больше всего мотивирует?",
            options: [
                { text: "Убедиться, что приложение работает без ошибок", value: "testing" },
                { text: "Создать увлекательный игровой процесс", value: "gameDev" },
                { text: "Разработать веб-сайт, который будет привлекать пользователей", value: "webDev" },
                { text: "Создать сложный 3D-мир или персонаж", value: "mobileDev" }
            ]
        },
        {
            id: 10,
            question: "Какую цель вы хотите достичь?",
            options: [
                { text: "Добиться 100% покрытия тестами", value: "testing" },
                { text: "Создать успешную игру", value: "gameDev" },
                { text: "Запустить успешный веб-сайт", value: "webDev" },
                { text: "Создать реалистичные 3D-объекты", value: "mobileDev" }
            ]
        },
        {
            id: 11,
            question: "Какую задачу вы бы предпочли на практике?",
            options: [
                { text: "Тестирование программного обеспечения", value: "testing" },
                { text: "Создание игровых уровней", value: "gameDev" },
                { text: "Создание веб-страниц и сайтов", value: "webDev" },
                { text: "Моделирование персонажей в 3D", value: "mobileDev" }
            ]
        },
        {
            id: 12,
            question: "Что вам больше по душе?",
            options: [
                { text: "Поиск ошибок в программном обеспечении", value: "testing" },
                { text: "Разработка захватывающих игровых механик", value: "gameDev" },
                { text: "Создание уникальных веб-дизайнов", value: "webDev" },
                { text: "Создание трёхмерных объектов и моделей", value: "mobileDev" }
            ]
        },
        {
            id: 13,
            question: "Какие навыки вы хотите развить?",
            options: [
                { text: "Автоматизация тестирования", value: "testing" },
                { text: "Программирование игровых механик", value: "gameDev" },
                { text: "Разработка веб-приложений", value: "webDev" },
                { text: "Создание 3D-анимации и моделирования", value: "mobileDev" }
            ]
        },
        {
            id: 14,
            question: "Что для вас наиболее важно в работе?",
            options: [
                { text: "Безупречная работа программ", value: "testing" },
                { text: "Разработка игр с уникальными механиками", value: "gameDev" },
                { text: "Создание современных веб-сайтов", value: "webDev" },
                { text: "Создание реалистичных 3D-анимаций", value: "mobileDev" }
            ]
        },
        {
            id: 15,
            question: "Что вас больше привлекает?",
            options: [
                { text: "Тестирование программного обеспечения", value: "testing" },
                { text: "Игровая индустрия и создание игр", value: "gameDev" },
                { text: "Веб-разработка и дизайн", value: "webDev" },
                { text: "3D-дизайн и анимация", value: "mobileDev" }
            ]
        },
        {
            id: 16,
            question: "Какую конечную цель вы хотите достичь?",
            options: [
                { text: "Безошибочное программное обеспечение", value: "testing" },
                { text: "Создание популярной игры", value: "gameDev" },
                { text: "Успешный и удобный веб-сайт", value: "webDev" },
                { text: "Высококачественная 3D-анимация", value: "mobileDev" }
            ]
        },
        {
            id: 17,
            question: "Какое направление вам ближе?",
            options: [
                { text: "Тестирование и отладка ПО", value: "testing" },
                { text: "Разработка игровых механик", value: "gameDev" },
                { text: "Создание веб-интерфейсов", value: "webDev" },
                { text: "Моделирование и создание 3D-графики", value: "mobileDev" }
            ]
        },
        {
            id: 18,
            question: "Какую задачу вы бы предпочли?",
            options: [
                { text: "Тестировать приложения", value: "testing" },
                { text: "Создавать интересные игровые сценарии", value: "gameDev" },
                { text: "Разрабатывать адаптивные сайты", value: "webDev" },
                { text: "Создавать 3D-анимированные объекты", value: "mobileDev" }
            ]
        },
        {
            id: 19,
            question: "Какая деятельность вас привлекает больше всего?",
            options: [
                { text: "Тестирование приложений", value: "testing" },
                { text: "Создание игр", value: "gameDev" },
                { text: "Разработка сайтов", value: "webDev" },
                { text: "Создание 3D-моделей", value: "mobileDev" }
            ]
        },
        {
            id: 20,
            question: "Что для вас является приоритетом?",
            options: [
                { text: "Качество и отсутствие ошибок", value: "testing" },
                { text: "Игровая механика и дизайн", value: "gameDev" },
                { text: "Эстетика и удобство веб-сайтов", value: "webDev" },
                { text: "Создание реалистичной 3D-графики", value: "mobileDev" }
            ]
        }
    ],
    courseResults: {
        testing: {
            description: "Вы выбрали направление 'Тестировщик ПО'. Этот курс научит вас создавать современные сайты и веб-приложения.",
        },
        gameDev: {
            description: "Вы выбрали направление 'Создание игр'. Этот курс поможет вам стать профессионалом в игровой индустрии.",
        },
        mobileDev: {
            description: "Вы выбрали направление 'Мобильная разработка'. Этот курс поможет вам освоить создание мобильных приложений.",
        },
        webDev: {
            description: "Вы выбрали направление 'Веб-разработка'. Этот курс научит вас создавать современные сайты и веб-приложения.",
        }
    },
    answers: {},
    result: null
}

const calculateAnswers = (answers) => {
    const counts = {
        testing: 0,
        gameDev: 0,
        mobileDev: 0,
        webDev: 0
    }

    Object.values(answers).forEach(answer => {
        if (counts[answer] !== undefined) {
            counts[answer] += 1
        }
    })

    return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b)

}

export const testPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ANSWER: {
            const newAnswer = {
                ...state.answers,
                [action.index]: action.answer
            };

            const result = calculateAnswers(newAnswer);
            console.log(result)
            return {
                ...state,
                answers: newAnswer,
                result: result
            }

        }
        default: return state;
    }
}


export const setAnswer = (index, answer) => ({
    type: SET_ANSWER,
    index, answer
}
)