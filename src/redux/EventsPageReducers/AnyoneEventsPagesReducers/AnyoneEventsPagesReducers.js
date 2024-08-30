

const initialState = {
    events: [
        {
            id: "queensMove",
            couchesBackgroundImages: [
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20179.png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(3).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(1).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(2).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20181.png?raw=true"
            ],
            header: {
                headerImages: [
                    {
                        imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(3).png?raw=true",
                        top: "1%",
                        left: "-5%"
                    },
                    {
                        imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20178.png?raw=true",
                        top: "60%",
                        left: "-10%"
                    },
                    {
                        imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(1).png?raw=true",
                        top: "55%",
                        left: "35%"
                    },
                    {
                        imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20181.png?raw=true",
                        top: "84%",
                        left: "26%"
                    },
                    {
                        imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(4).png?raw=true",
                        top: "10%",
                        left: "103%"
                    },
                    {
                        imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20182.png?raw=true",
                        top: "88%",
                        left: "97%",
                        width: "17%"
                    }
                ],
                headerBackgroundImage: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-events/DALL%C2%B7E%202024-06-14%2011.04.47.jpg?raw=true",
                headerTitle: "Ход королевы",
                headerDescription: "Сила и стратегия",
                headerParagrafs: [
                    "Мастер-классы от <br/> гроссмейстеров,<br/>улучшение навыков и <br/> тактического мышления.",
                    "Уникальные призы <br/> участникам, <br/> мотивация для <br/> шахматных достижений.",
                    "Встречи с шахматными <br/> мастерами, обмен <br/> опытом и стратегиями <br/> игры."
                ]
            },
            goals: {
                unionText: "Как только вы начнете-уже не <br/> сможете остановиться!",
                goal: [
                    { imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Group.png?raw=true", goalTitle: "Турнир", goalText: "Присоединяйтесь к турниру, <br/> соревнуйтесь с лучшими игроками <br/> и покажите свои шахматные навыки." },
                    { imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Group%20(1).png?raw=true", goalTitle: "Стратегии шахмат", goalText: "Изучите новые тактики <br/> и улучшите свои шахматные умения <br/> в увлекательном турнире." },
                    { imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Group%20(2).png?raw=true", goalTitle: "Битва за корону", goalText: "Сразитесь за титул чемпиона, <br/> побеждая сильных соперников в <br/> престижном шахматном турнире." }
                ]
            },
            programmData: {
                programmTitle: "Ход Королевы",
                programmParagraf: `Наш шахматный турнир "Ход Королевы" начнется с приветственного слова организаторов и короткого инструктажа для участников. В течение дня вас ждут напряженные матчи с участием опытных шахматистов и новичков. Перерывы между играми будут сопровождаться мастер-классами от гроссмейстеров, где можно будет узнать о тонкостях шахматных стратегий. Кроме того, мы подготовили интерактивные сессии и дружеские поединки.`,
                accordionData: [
                    {
                        dayTitle: "День первый",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Регистрация участников и приветственный кофе",
                                text: "Участники получают регистрационные пакеты, программы и именные бейджи. Утренняя встреча за чашкой кофе для знакомства и общения."
                            },
                            {
                                time: "10:00 - 10:30",
                                title: "Официальное открытие",
                                text: "Приветственное слово организаторов и спонсоров мероприятия. Краткий обзор программы и регламент турнира."
                            },
                            {
                                time: "10:30 - 12:30",
                                title: "Первый тур шахматного турнира",
                                text: "Начало первого тура, распределение пар участников и начало матчей."
                            },
                            {
                                time: "12:30 - 13:30",
                                title: "Обеденный перерыв",
                                text: "Обед для всех участников в специально организованной зоне питания."
                            },
                            {
                                time: "13:30 - 15:00",
                                title: "Мастер-класс от гроссмейстера",
                                text: "Известный шахматист делится своими секретами и тактиками игры. Вопросы и ответы для участников."
                            },
                            {
                                time: "15:00 - 17:00",
                                title: "Второй тур шахматного турнира",
                                text: "Продолжение турнира, новые пары участников и матчи."
                            },
                            {
                                time: "17:00 - 17:30",
                                title: "Перерыв на чай",
                                text: "Возможность для участников отдохнуть, обсудить результаты игр и подготовиться к следующим матчам."
                            },
                            {
                                time: "17:30 - 19:00",
                                title: "Интерактивные сессии и дружеские поединки",
                                text: "Участники могут принять участие в неформальных играх, познакомиться и пообщаться с другими любителями шахмат."
                            },
                            {
                                time: "19:00 - 20:00",
                                title: "Заключительное слово и подведение итогов первого дня",
                                text: "Организаторы подводят итоги дня, объявляют промежуточные результаты и дают напутствие на следующий день турнира."
                            }
                        ]
                    },
                    {
                        dayTitle: "День второй",
                        events: [
                            {
                                time: "10:00 - 11:30",
                                title: "Мастер-класс 'Стратегии эндшпиля' от гроссмейстера",
                                text: "Участники узнают о ключевых стратегиях для победы в эндшпиле. Практические примеры и разбор партий."
                            },
                            {
                                time: "11:30 - 12:00",
                                title: "Перерыв на кофе и нетворкинг",
                                text: "Возможность обсудить утреннюю сессию с другими участниками и наладить новые контакты."
                            },
                            {
                                time: "12:00 - 13:30",
                                title: "Турнир по шахматам среди участников, второй этап",
                                text: "Начало второго тура, где участники смогут применить полученные знания. Судейство и комментарии профессионалов."
                            },
                            {
                                time: "13:30 - 14:30",
                                title: "Обеденный перерыв",
                                text: "Обед для всех участников в специально организованной зоне питания."
                            },
                            {
                                time: "14:30 - 16:00",
                                title: "Семинар 'Психология шахмат' с ведущим психологом",
                                text: "Обсуждение психологических аспектов игры в шахматы. Техники управления стрессом и концентрацией во время партии."
                            },
                            {
                                time: "16:00 - 17:00",
                                title: "Перерыв на кофе и нетворкинг",
                                text: "Ещё одна возможность для неформального общения и обмена опытом."
                            },
                            {
                                time: "17:30 - 19:00",
                                title: "Вторая часть второго этапа турнира по шахматам",
                                text: "Заключительные игры второго этапа турнира. Подведение итогов второго дня соревнований."
                            }
                        ]
                    },
                    {
                        dayTitle: "День третий",
                        events: [
                            {
                                time: "10:00 - 11:30",
                                title: "Мастер-класс 'Анализ знаменитых партий' от гроссмейстера",
                                text: "Разбор известных партий, изучение стратегий великих шахматистов. Практическое применение полученных знаний."
                            },
                            {
                                time: "11:30 - 12:00",
                                title: "Перерыв на кофе и нетворкинг",
                                text: "Возможность обсудить утреннюю сессию с другими участниками и наладить новые контакты."
                            },
                            {
                                time: "12:00 - 13:30",
                                title: "Финал турнира по шахматам среди участников",
                                text: "Заключительные игры турнира. Судейство и комментарии профессионалов."
                            },
                            {
                                time: "13:30 - 14:30",
                                title: "Обеденный перерыв",
                                text: "Обед в ресторане мероприятия. Свободное время для общения и отдыха."
                            },
                            {
                                time: "14:30 - 16:00",
                                title: "Семинар 'Современные тенденции в шахматах' с ведущим экспертом",
                                text: "Обсуждение новейших трендов и технологий в шахматах. Техники и стратегии, применяемые в современных турнирах."
                            },
                            {
                                time: "16:00 - 17:00",
                                title: "Практическая сессия: тренировка с профессионалами",
                                text: "Индивидуальные консультации и тренировки с ведущими шахматистами. Советы по улучшению техники и стратегии."
                            },
                            {
                                time: "17:00 - 17:30",
                                title: "Перерыв на кофе и нетворкинг",
                                text: "Ещё одна возможность для неформального общения и обмена опытом."
                            },
                            {
                                time: "17:30 - 19:00",
                                title: "Награждение победителей и заключительное слово",
                                text: "Вручение наград и сертификатов победителям турнира. Подведение итогов мероприятия и заключительное слово организаторов."
                            },
                            {
                                time: "19:00 - 21:00",
                                title: "Вечеринка в честь окончания турнира",
                                text: "Масштабная вечеринка на аллее около места турнира, закуски, музыка и живое общение с мастерами шахмат и остальными участниками."
                            }
                        ]
                    }
                ]
            },
            couchesData: [
                {
                    name: "Михаил Сквернослов",
                    proffession: "Мастер спорта по шахматам, <br> обучает игре более 15 лет. <br> Призер международных турниров.",
                    imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Ellipse%20185%20(1).png?raw=true"
                },
                {
                    name: "Анастасия Кидалова",
                    proffession: "Выпускница Гарвардского <br> Университета. <br> Более 10 лет играет в шахматы и участвует в турнирах.",
                    imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Ellipse%20185.png?raw=true"
                },
                {
                    name: "Ольга Гнилоустная",
                    proffession: "Международный гроссмейстер, <br> преподает шахматы более 20 лет. <br> Авторитетный тренер и стратег.",
                    imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Ellipse%20185%20(2).png?raw=true"
                },
                {
                    name: "Максим Жалкий",
                    proffession: "Обладатель титула чемпиона страны, <br> с 15-летним опытом тренерской работы.",
                    imgSrc: "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Ellipse%20185%20(3).png?raw=true"
                }
            ]
        }
    ]
};
const anyoneEventsPageReducers = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default anyoneEventsPageReducers;