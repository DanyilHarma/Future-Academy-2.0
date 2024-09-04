

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
            overviewTitle: "Фотографии с прошлых мероприятий",
            overviewParagraf: "Узнайте, как проходили наши прошлые мероприятия: посмотрите яркие фотографии, запечатлевшие увлекательные моменты, радость побед и живое общение участников и тренеров.",
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
            ],
            carouselImages: [
                { imgSrc: "https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/images-events/quennsMoveeventImages/images-chess-page_image%2019.png?raw=true" },
                { imgSrc: "https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/images-events/quennsMoveeventImages/images-chess-page_image%2020.png?raw=true" },
                { imgSrc: "https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/images-events/quennsMoveeventImages/images-chess-page_image%2021.png?raw=true" },
                { imgSrc: "https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/images-events/quennsMoveeventImages/images-chess-page_image%2022.png?raw=true" },
                { imgSrc: "https://chesstogo.ru/images/1-18877-1514363749-3752.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQjDszuhD3athfYfz9eWPr7kVYnX68_utKw&s" },
                { imgSrc: "https://clever-h.ru/wp-content/uploads/2017/04/51.jpg" }
            ]
        },
        {
            id: "beginnersHackathon",
            couchesBackgroundImages: [
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20179.png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(3).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(1).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(2).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20181.png?raw=true"
            ],
            overviewTitle: "Фотографии с прошлых мероприятий",
            overviewParagraf: "Узнайте, как проходили наши прошлые мероприятия: посмотрите яркие фотографии, запечатлевшие увлекательные моменты, радость побед и живое общение участников и тренеров.",
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
                headerBackgroundImage: "https://raw.githubusercontent.com/DanyilHarma/Future-Academy-2.0/master/src/assets/images/images-events/DALL%C2%B7E%202024-06-14%2014.08.36%20.webp",
                headerTitle: "Хакатон для начинающих",
                headerDescription: "Начни свой путь в мир технологий и инноваций",
                headerParagrafs: [
                    "Увлекательные задания <br> для начинающих <br> программистов.",
                    "Командная работа <br> и новые знакомства.",
                    "Поддержка опытных <br> менторов и наставников."
                ]
            },
            goals: {
                unionText: "Начните свой путь в<br/> программировании с нашего хакатона!",
                goal: [
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/143/143655.png", goalTitle: "Основы кода", goalText: "Изучите основы программирования,<br/>погрузившись в реальные задачи<br/>и простые проекты." },
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/1534/1534938.png", goalTitle: "Командная работа", goalText: "Освойте навыки работы в команде,<br/>решая задачи совместно с другими<br/>начинающими программистами." },
                    { imgSrc: "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/first-icon.png", goalTitle: "Первый проект", goalText: "Создайте свои первые<br/>программные решения, направленные<br/>на решение реальных проблем." }
                ]
            },
            programmData: {
                programmTitle: "Программа мероприятия 'Хакатон для начинающих'",
                programmParagraf: `Программа хакатона включает в себя увлекательные задачи для начинающих программистов, интерактивные
                семинары от опытных менторов, командные проекты и конкурсы с ценными призами. Участники получат
                возможность развить свои навыки программирования, обменяться опытом с единомышленниками и найти новых
                друзей. Завершающий день будет посвящен презентации проектов и награждению победителей.`,
                accordionData: [
                    {
                        dayTitle: "День первый",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Регистрация участников и приветственное слово организаторов.",
                                text: "Время для знакомства и получения всех необходимых материалов для участия в хакатоне."
                            },
                            {
                                time: "10:00 - 11:00",
                                title: `Вводная лекция: "Основы программирования для начинающих".`,
                                text: "Лекция, охватывающая базовые принципы и концепции программирования для тех, кто делает свои первые шаги в этой области."
                            },
                            {
                                time: "11:00 - 13:00",
                                title: `Семинар: "Как успешно работать в команде над проектом".`,
                                text: "Начало первого тура, распределение пар участников и начало матчей."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Обед для всех участников в специально организованной зоне питания."
                            },
                            {
                                time: "14:00 - 16:00",
                                title: "Мастер-классы по различным языкам программирования (Python, JavaScript, HTML/CSS).",
                                text: "Углубленные занятия по популярным языкам программирования с примерами и практическими заданиями."
                            },
                            {
                                time: "16:00 - 19:00",
                                title: "Практическое задание: разработка простого веб-приложения.",
                                text: "Участники применяют полученные знания на практике, разрабатывая свои первые проекты."
                            },
                            {
                                time: "19:00 - 20:00",
                                title: "Вечерняя встреча: обсуждение первых впечатлений и планов на следующий день.",
                                text: "Подведение итогов первого дня, обмен впечатлениями и обсуждение планов на следующие дни хакатона."
                            }
                        ]
                    },
                    {
                        dayTitle: "День второй",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Утренняя встреча: обсуждение задач и планов на день",
                                text: "Команды собираются, чтобы обсудить свои задачи и стратегии на предстоящий день работы."
                            },
                            {
                                time: "10:00 - 12:00",
                                title: `Лекция: "Основы UX/UI дизайна для начинающих".`,
                                text: "Участники узнают о ключевых принципах пользовательского опыта и интерфейса, и как их применять в своих проектах."
                            },
                            {
                                time: "12:00 - 13:00",
                                title: `Мастер-класс: "Создание интерактивных веб-приложений".`,
                                text: "Начало второго тура, где участники смогут применить полученные знания. Судейство и комментарии профессионалов."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Обед для всех участников в специально организованной зоне питания."
                            },
                            {
                                time: "14:00 - 16:00",
                                title: "Практическая сессия: работа над проектами.",
                                text: "Команды продолжают работу над своими проектами, применяя новые знания и идеи."
                            },
                            {
                                time: "16:00 - 17:00",
                                title: `Воркшоп: "Инструменты для командной разработки и контроля версий".`,
                                text: "Ещё одна возможность для неформального общения и обмена опытом."
                            },
                            {
                                time: "17:00 - 18:00",
                                title: "Консультации с менторами.",
                                text: "Участники могут получить советы и рекомендации от опытных менторов по своим проектам."
                            },
                            {
                                time: "18:00 - 19:00",
                                title: "Вечерняя сессия: презентация промежуточных результатов.",
                                text: "Команды делятся своим прогрессом и получают обратную связь от других участников и менторов."
                            },
                            {
                                time: "19:00 - 20:00",
                                title: "Свободное время для общения и отдыха.",
                                text: "Участники могут расслабиться, обсудить идеи и подготовиться к заключительному дню хакатона."
                            }
                        ]
                    },
                    {
                        dayTitle: "День третий",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Утренняя встреча: финальные задачи и обсуждение.",
                                text: "Команды собираются, чтобы обсудить последние задачи и планы на завершение проектов."
                            },
                            {
                                time: "10:00 - 11:00",
                                title: `Лекция: "Тестирование и отладка веб-приложений".`,
                                text: "Участники изучают методы и инструменты для тестирования и отладки своих веб-приложений."
                            },
                            {
                                time: "11:00 - 13:00",
                                title: "Практическая сессия: завершаем проекты.",
                                text: "Команды работают над финальными штрихами своих проектов, исправляя ошибки и улучшая функциональность."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Обед в ресторане мероприятия. Свободное время для общения и отдыха."
                            },
                            {
                                time: "14:00 - 16:00",
                                title: " Подготовка презентаций.",
                                text: "Участники готовят свои презентации, проверяют демонстрации и репетируют выступления."
                            },
                            {
                                time: "16:00 - 18:00",
                                title: "Презентации проектов.",
                                text: "Жюри оценивает проекты, предоставляет обратную связь и выбирает победителей."
                            },
                            {
                                time: "18:00 - 19:00",
                                title: "Оценка и обратная связь от жюри.",
                                text: "Ещё одна возможность для неформального общения и обмена опытом."
                            },
                            {
                                time: "19:00 - 20:00",
                                title: "Награждение и закрытие хакатона.",
                                text: "Объявление победителей, вручение призов и завершающая речь организаторов."
                            },
                            {
                                time: "20:00 - 21:00",
                                title: "Фуршет и общение.",
                                text: "Время для неформального общения, обсуждения опыта и планирования будущих совместных проектов."
                            }
                        ]
                    }
                ]
            },
            couchesData: [
                {
                    name: "Сергей Безхребетов",
                    proffession: "Выпускник Гарвардского <br/> Университета. <br/> Опытный разработчик с более чем 15-летним стажем работы в IT-индустрии.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Permyakov3.jpg"
                },
                {
                    name: "Мария Петрова",
                    proffession: "Опытный специалист в области разработки и тестирования ПО. Работает в индустрии более 10 лет, успешно проводил множество хакатонов и семинаров.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Otdelkina4.jpg"
                },
                {
                    name: "Алина Мерикова",
                    proffession: "Молодая и перспективная программистка, недавно закончившая технический университет с отличием.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B04.jpg"
                },
                {
                    name: "Гор Обреченный",
                    proffession: "Главный инженер-разработчик в ведущей IT-компании. Обладает обширным опытом в создании крупных веб-приложений и обучении команд.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Rystamov3.jpg"
                }
            ],
            carouselImages: [
                { imgSrc: "https://sun1-1.userapi.com/c841620/v841620308/35a20/p6QMACvzlHw.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9ywG57qz5YrWTRhnZcChuDDoiFJjDbcK5g&s" },
                { imgSrc: "https://www.timacad.ru/uploads/media/cache/image_sm_resize/uploads/images/20240313/b_img65f1c8a43d36d2.28616322.jpg" },
                { imgSrc: "https://apkpro.ru/upload/resize_cache/iblock/45d/708_408_2/oa85xk6d8xivw4qne7mjmerhjetu9ny5.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFALhI_2dUwdbL_BoVvmqD2WZPHc8mks1dA&s" },
                { imgSrc: "https://cybergarden.ru/images/gallery/3.jpg" },
                { imgSrc: "https://sun9-8.userapi.com/impg/rRVEInEtdLs2N6QTirUyCM48iNJi-qIlnj01sg/WvY866-xq58.jpg?size=807x538&quality=95&sign=af40a278298591dbf14ef5e415246cc1&c_uniq_tag=rSAUpq8b4UEFcIXwpw5SN29R4jtag-UdgWdjKx1CzTU&type=album" }
            ]
        },
        {
            id: "gameDev",
            couchesBackgroundImages: [
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20179.png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(3).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(1).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(2).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20181.png?raw=true"
            ],
            overviewTitle: "Фотографии с прошлых мероприятий",
            overviewParagraf: "Узнайте, как проходили наши прошлые мероприятия: посмотрите яркие фотографии, запечатлевшие увлекательные моменты, радость побед и живое общение участников и тренеров.",
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
                headerBackgroundImage: "https://raw.githubusercontent.com/DanyilHarma/Future-Academy-2.0/master/src/assets/images/images-events/gameDev/DALL%C2%B7E%202024-06-16%2023.07.49%20.webp",
                headerTitle: "GameDev",
                headerDescription: "Создай свою первую игру за один день!",
                headerParagrafs: [
                    " Погружение в индустрию <br> игр за один день.",
                    "Практическое обучение <br> от опытных разработчиков, <br> создание реальных <br> проектов.",
                    "Реальные советы <br> и живая поддержка."
                ]
            },
            goals: {
                unionText: "Начните свой путь в<br/> gameDev с нашего интенсива!",
                goal: [
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/2620/2620461.png", goalTitle: "Прототип", goalText: "Начните с разработки базового <br/> прототипа вашей игры. <br/> Превратите идеи в реальность." },
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/3589/3589787.png", goalTitle: "Проектирование", goalText: "Узнайте, как создавать <br/> увлекательные уровни и <br/> обеспечьте захватывающий геймплей." },
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/2361/2361682.png", goalTitle: "Оптимизация", goalText: "Повышайте производительность <br/> игры, чтобы она работала <br/> безупречно на всех устройствах." }
                ]
            },
            programmData: {
                programmTitle: `Программа мероприятия "GameDev"`,
                programmParagraf: `Наш интенсив по GameDev предлагает участникам уникальную возможность погрузиться в мир разработки игр. В
                течение трех дней вы освоите основы программирования, работы с игровыми движками и дизайна уровней.
                Программа включает теоретические лекции, практические задания и командные проекты, которые помогут вам
                создать свою первую игру. Опытные наставники и успешные разработчики игр поделятся своими знаниями и
                практическими советами, а также помогут вам разобраться в тонкостях индустрии. Присоединяйтесь к нам и
                начните свой путь в мире разработки игр!`,
                accordionData: [
                    {
                        dayTitle: "День первый",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Регистрация участников и приветственное слово организаторов.",
                                text: "Добро пожаловать на интенсив по GameDev! Участники регистрируются, получают приветственные пакеты и знакомятся друг с другом за чашкой кофе."
                            },
                            {
                                time: "10:00 - 11:30",
                                title: `Введение в GameDev.`,
                                text: "Лекция о базовых принципах разработки игр, знакомство с основными инструментами и технологиями, используемыми в индустрии."
                            },
                            {
                                time: "11:30 - 13:00",
                                title: `Основы программирования`,
                                text: "Практическое занятие, посвященное основам программирования на языке, используемом для разработки игр. Участники пишут первый простой игровой код."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Обед для всех участников в специально организованной зоне питания."
                            },
                            {
                                time: "14:00 - 16:00",
                                title: "Работа с игровыми движками.",
                                text: "Практическое занятие, где участники знакомятся с популярными игровыми движками, такими как Unity или Unreal Engine, и начинают создавать свои первые сцены."
                            },
                            {
                                time: "16:00 - 18:00",
                                title: "Дизайн уровней",
                                text: "Лекция и практическое занятие по созданию игровых уровней, рассмотрение принципов геймдизайна и пользовательского опыта."
                            },
                            {
                                time: "18:00 - 19:00",
                                title: "Свободное время и вечерние мероприятия.",
                                text: "Участники могут свободно общаться, задавать вопросы наставникам или участвовать в дополнительных мероприятиях."
                            }
                        ]
                    },
                    {
                        dayTitle: "День второй",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Утренняя сессия вопросов и ответов",
                                text: "Участники обсуждают свои вопросы и проблемы с предыдущего дня с наставниками."
                            },
                            {
                                time: "10:00 - 11:30",
                                title: `Продвинутое программирование`,
                                text: "Практическое занятие по более сложным аспектам программирования для игр, включая физику, AI и сети."
                            },
                            {
                                time: "11:30 - 13:00",
                                title: `Анимация и графика.`,
                                text: "Лекция и практическое занятие по созданию и интеграции анимаций и графических элементов в игры."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Обед для всех участников в специально организованной зоне питания."
                            },
                            {
                                time: "14:00 - 16:00",
                                title: "Командные проекты.",
                                text: "Участники объединяются в команды и начинают работать над своими игровыми проектами под руководством наставников."
                            },
                            {
                                time: "16:00 - 18:00",
                                title: `Тестирование и отладка.`,
                                text: "Практическое занятие, посвященное тестированию и отладке игровых проектов. Участники учатся выявлять и исправлять ошибки в своем коде."
                            },
                            {
                                time: "18:00 - 19:00",
                                title: "Презентация проектов и подведение итогов.",
                                text: "Команды представляют свои проекты, получают отзывы от наставников и другихучастников.Подведение итогов и награждение лучших проектов."
                            }
                        ]
                    }
                ]
            },
            couchesData: [
                {
                    name: "Антон Чеботарев",
                    proffession: "Опытный специалист в области разработки и тестирования ПО. Работает в индустрии более 10 лет, успешно проводил множество хакатонов и семинаров.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/xTolchin4.png.pagespeed.ic.9lHYLb7ytz.webp"
                },
                {
                    name: "Наталья Кикиха",
                    proffession: "Выпускник Гарвардского <br> Университета. <br>Опытный разработчик с более чем 15-летним стажем работы в IT-индустрии.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/xylyanova4.jpg.pagespeed.ic.rfIp2je1uZ.webp"
                },
                {
                    name: "Аэлита Мурзикова",
                    proffession: "Главный инженер-разработчик в ведущей IT-компании. Обладает обширным опытом в создании крупных веб-приложений и обучении команд.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/xskatova3.png.pagespeed.ic.OaN1enhd0t.webp"
                },
                {
                    name: "Алина Мерикова",
                    proffession: "Молодая и перспективная программистка, недавно закончившая технический университет с отличием.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B04.jpg"
                }
            ],
            carouselImages: [
                { imgSrc: "https://sun1-1.userapi.com/c841620/v841620308/35a20/p6QMACvzlHw.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9ywG57qz5YrWTRhnZcChuDDoiFJjDbcK5g&s" },
                { imgSrc: "https://www.timacad.ru/uploads/media/cache/image_sm_resize/uploads/images/20240313/b_img65f1c8a43d36d2.28616322.jpg" },
                { imgSrc: "https://apkpro.ru/upload/resize_cache/iblock/45d/708_408_2/oa85xk6d8xivw4qne7mjmerhjetu9ny5.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFALhI_2dUwdbL_BoVvmqD2WZPHc8mks1dA&s" },
                { imgSrc: "https://cybergarden.ru/images/gallery/3.jpg" },
                { imgSrc: "https://sun9-8.userapi.com/impg/rRVEInEtdLs2N6QTirUyCM48iNJi-qIlnj01sg/WvY866-xq58.jpg?size=807x538&quality=95&sign=af40a278298591dbf14ef5e415246cc1&c_uniq_tag=rSAUpq8b4UEFcIXwpw5SN29R4jtag-UdgWdjKx1CzTU&type=album" }
            ]
        },
        {
            id: "modernTechnology",
            couchesBackgroundImages: [
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20179.png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(3).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(1).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(2).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20181.png?raw=true"
            ],
            overviewTitle: "Фотографии с прошлых мероприятий",
            overviewParagraf: "Узнайте, как проходили наши прошлые мероприятия: посмотрите яркие фотографии, запечатлевшие увлекательные моменты, радость побед и живое общение участников и тренеров.",
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
                headerBackgroundImage: "https://raw.githubusercontent.com/DanyilHarma/Future-Academy-2.0/master/src/assets/images/images-events/modernTechnology/DALL%C2%B7E%202024-06-17%2013.41.58%20.webp",
                headerTitle: "Современные технологии <br/> веб-разработки",
                headerDescription: "Будущее веба начинается здесь!",
                headerParagrafs: [
                    " Изучение новейших технологий <br> и инструментов веб-разработки.",
                    "Практические занятия <br> и кейсы от ведущих <br> специалистов.",
                    "Сертификат участия, <br> подтверждающий<br> ваши новые навыки."
                ]
            },
            goals: {
                unionText: "Как только вы начнете-уже не сможете остановиться!",
                goal: [
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/3352/3352955.png", goalTitle: "Интерактивные<br/> сессии", goalText: "Изучите новейшие <br/> подходы и методологии <br/> веб-разработки." },
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/17027/17027066.png", goalTitle: "Практическое<br/> применение", goalText: "Примените знания <br/> на практике, создавая <br/> современные веб-приложения." },
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/11670/11670422.png", goalTitle: "Обмен опытом", goalText: "Познакомьтесь с коллегами <br/> и поделитесь опытом, <br/> обсуждая реальные проекты <br/> и кейсы." }
                ]
            },
            programmData: {
                programmTitle: `Программа мероприятия "Современные технологии веб-разработки"`,
                programmParagraf: `<strong>Современные технологии веб-разработки</strong> предлагают участникам уникальную возможность
                познакомиться с
                передовыми инструментами и методами создания веб-приложений. Вы узнаете, как использовать новейшие
                фреймворки и библиотеки для повышения производительности и улучшения пользовательского опыта. Программа
                включает в себя лекции от ведущих экспертов, практические занятия и воркшопы, которые помогут вам
                освоить современные подходы к веб-разработке и применить их на практике.`,
                accordionData: [
                    {
                        dayTitle: "День первый",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Регистрация участников и приветственное слово организаторов.",
                                text: "Участники могут зарегистрироваться, получить материалы и познакомиться друг с другом за чашкой кофе."
                            },
                            {
                                time: "10:00 - 11:30",
                                title: `Лекция: Новые фреймворки и библиотеки.`,
                                text: "Подробное рассмотрение новых и популярных фреймворков и библиотек, их преимуществ и особенностей."
                            },
                            {
                                time: "11:30 - 12:30",
                                title: `Обед`,
                                text: "Вкусный обед, во время которого участники могут продолжить общение и обмен опытом."
                            },
                            {
                                time: "12:30 - 13:30",
                                title: "Практическое занятие: Основы React.js",
                                text: "Практическое введение в React.js, создание простого приложения с использованием этого фреймворка."
                            },
                            {
                                time: "15:30 - 17:00",
                                title: "Воркшоп: Создание динамичных интерфейсов",
                                text: "Интерактивный воркшоп, на котором участники научатся создавать интерактивные и динамичные интерфейсы."
                            }
                        ]
                    },
                    {
                        dayTitle: "День второй",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Утренняя сессия вопросов и ответов",
                                text: "Участники обсуждают свои вопросы и проблемы с предыдущего дня с наставниками."
                            },
                            {
                                time: "10:00 - 11:30",
                                title: `Лекция: Тренды в веб-дизайне`,
                                text: "Анализ текущих трендов в веб-дизайне, с примерами и рекомендациями по их внедрению."
                            },
                            {
                                time: "11:30 - 13:00",
                                title: `Практическое занятие: Работа с Vue.js`,
                                text: "Практическое занятие по Vue.js, включающее разработку компонентов и управляемых данных."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Обед для всех участников в специально организованной зоне питания."
                            },
                            {
                                time: "14:00 - 15:30",
                                title: "Воркшоп: Интеграция с API",
                                text: "Интерактивный воркшоп по интеграции веб-приложений с внешними API, включая аутентификацию и работу с данными."
                            },
                            {
                                time: "15:30 - 17:00",
                                title: `Панельная дискуссия: Будущее веб-разработки.`,
                                text: "Ещё одна возможность для неформального общения и обмена опытом."
                            }
                        ]
                    },
                    {
                        dayTitle: "День третий",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Утренний кофе и нетворкинг",
                                text: "Утренний кофе, позволяющий участникам настроиться на продуктивный день и обменяться идеями."
                            },
                            {
                                time: "10:00 - 11:30",
                                title: `Лекция: Автоматизация процессов разработки`,
                                text: "Лекция о современных инструментах и методах автоматизации процессов разработки, тестирования и деплоя."
                            },
                            {
                                time: "11:30 - 13:00",
                                title: `Практическое занятие: Разработка с использованием Angular`,
                                text: "Практическое занятие по Angular, включающее создание SPA и работу с директивами и сервисами."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Обед для всех участников в специально организованной зоне питания."
                            },
                            {
                                time: "14:00 - 15:30",
                                title: "Воркшоп: Оптимизация производительности веб-приложений",
                                text: "Воркшоп по оптимизации производительности веб-приложений, включая работу с кешированием и улучшение времени загрузки."
                            },
                            {
                                time: "15:30 - 17:00",
                                title: `Заключительная сессия и вопросы участников.`,
                                text: "Подведение итогов мероприятия, ответы на вопросы участников, обсуждение и обмен контактами для дальнейшего сотрудничества."
                            },
                            {
                                time: "17:00 - 18:00",
                                title: `Фуршет.`,
                                text: "Вкусный фуршет для всех участников, возможность расслабиться и пообщаться в неформальной обстановке."
                            },
                            {
                                time: "18:00 - 21:00",
                                title: `Вечеринка.`,
                                text: "Вечеринка в честь завершения мероприятия, музыка, развлечения и отличное настроение."
                            }
                        ]
                    }
                ]
            },
            couchesData: [
                {
                    name: "Маруся Климова",
                    proffession: "Опытный фронтенд-разработчик с 10-летним стажем, специалист по HTML, CSS и JavaScript.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Kokorina14.jpg"
                },
                {
                    name: "Мария Магдалена",
                    proffession: "Ведущий специалист по UX/UI дизайну с 8-летним опытом, магистр цифрового дизайна.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Makarova4.jpg"
                },
                {
                    name: "Олег Майами",
                    proffession: "Backend-разработчик с 12-летним опытом, сертифицированный специалист по AWS и облачным технологиям.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/JigalkoA3.jpg"
                },
                {
                    name: "Цветан Параплан",
                    proffession: "Эксперт по JavaScript-фреймворкам, 9 лет опыта, активный участник open-source проектов.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Galeta4.jpg"
                }
            ],
            carouselImages: [
                { imgSrc: "https://sun1-1.userapi.com/c841620/v841620308/35a20/p6QMACvzlHw.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9ywG57qz5YrWTRhnZcChuDDoiFJjDbcK5g&s" },
                { imgSrc: "https://www.timacad.ru/uploads/media/cache/image_sm_resize/uploads/images/20240313/b_img65f1c8a43d36d2.28616322.jpg" },
                { imgSrc: "https://apkpro.ru/upload/resize_cache/iblock/45d/708_408_2/oa85xk6d8xivw4qne7mjmerhjetu9ny5.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFALhI_2dUwdbL_BoVvmqD2WZPHc8mks1dA&s" },
                { imgSrc: "https://cybergarden.ru/images/gallery/3.jpg" },
                { imgSrc: "https://sun9-8.userapi.com/impg/rRVEInEtdLs2N6QTirUyCM48iNJi-qIlnj01sg/WvY866-xq58.jpg?size=807x538&quality=95&sign=af40a278298591dbf14ef5e415246cc1&c_uniq_tag=rSAUpq8b4UEFcIXwpw5SN29R4jtag-UdgWdjKx1CzTU&type=album" }
            ]
        },
        {
            id: "cyberMeeting",
            couchesBackgroundImages: [
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20179.png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(3).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(1).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(2).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20181.png?raw=true"
            ],
            overviewTitle: "Фотографии с прошлых мероприятий",
            overviewParagraf: "Узнайте, как проходили наши прошлые мероприятия: посмотрите яркие фотографии, запечатлевшие увлекательные моменты, радость побед и живое общение участников и тренеров.",
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
                headerBackgroundImage: "https://raw.githubusercontent.com/DanyilHarma/Future-Academy-2.0/master/src/assets/images/images-events/cyber-meeting/DALL%C2%B7E%202024-06-17%2015.57.03.webp",
                headerTitle: "Кибервстреча",
                headerDescription: "Исследуйте мир кибербезопасности <br/> и цифровых технологий на нашей встрече.",
                headerParagrafs: [
                    "Узнайте о последних тенденциях <br> в кибербезопасности и <br> цифровых технологиях.",
                    "Практические мастер-классы <br> от ведущих специалистов <br> индустрии.",
                    "Нетворкинг с <br> профессионалами <br> и энтузиастами."
                ]
            },
            goals: {
                unionText: "Как только вы начнете-уже не сможете остановиться!",
                goal: [
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/2974/2974498.png", goalTitle: "Тренды <br> кибербезопасности", goalText: "Изучите современные угрозы,<br>и возможности их устранить." },
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/4646/4646944.png", goalTitle: "Практические <br> мастер-классы", goalText: "Участвуйте в интерактивных сессиях <br> и получите ценные <br> навыки от экспертов." },
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/1239/1239719.png", goalTitle: "Профессиональный <br> нетворкинг", goalText: "Встречайтесь с лидерами <br> индустрии и расширяйте свои <br> профессиональные контакты." }
                ]
            },
            programmData: {
                programmTitle: `Программа мероприятия "Кибервстреча"`,
                programmParagraf: `На нашей <strong>"Кибервстрече"</strong> вас ждет насыщенная программа: от актуальных лекций по
                кибербезопасности до практических мастер-классов. Участвуйте в дискуссиях, получайте новые знания и
                расширяйте свои профессиональные связи.`,
                accordionData: [
                    {
                        dayTitle: "День первый",
                        events: [
                            {
                                time: "10:00 - 11:00",
                                title: "Открытие мероприятия",
                                text: "Приветственное слово от организаторов и вводная лекция о текущих тенденциях в кибербезопасности."
                            },
                            {
                                time: "11:15 - 12:30",
                                title: `Лекция: "Основы кибербезопасности"`,
                                text: "Обзор основных принципов и стратегий защиты данных."
                            },
                            {
                                time: "12:30 - 13:30",
                                title: `Обед`,
                                text: "Вкусный обед, во время которого участники могут продолжить общение и обмен опытом."
                            },
                            {
                                time: "13:30 - 15:00",
                                title: `Мастер-класс: "Анализ уязвимостей"`,
                                text: "Практическая сессия по выявлению и устранению уязвимостей в системах."
                            },
                            {
                                time: "15:15 - 16:45",
                                title: `"Панельная дискуссия: "Будущее киберугроз"`,
                                text: "Эксперты обсуждают прогнозы и стратегии противодействия будущим угрозам."
                            },
                            {
                                time: "17:00 - 18:00",
                                title: `Нетворкинг-сессия`,
                                text: "Время для знакомства и обмена контактами с участниками и экспертами."
                            }
                        ]
                    },
                    {
                        dayTitle: "День второй",
                        events: [
                            {
                                time: "10:00 - 11:30",
                                title: `Лекция: "Киберзащита для бизнеса"`,
                                text: "Как компании могут защитить свои данные и инфраструктуру от киберугроз."
                            },
                            {
                                time: "11:45 - 13:00",
                                title: `Мастер-класс: "Реагирование на инциденты"`,
                                text: "Практические шаги по выявлению и устранению киберинцидентов."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: `Обеденный перерыв`,
                                text: "Возможность обсудить утренние сессии и обменяться идеями."
                            },
                            {
                                time: "14:00 - 15:30",
                                title: `Лекция: "Кибербезопасность и закон"`,
                                text: "Влияние законодательства на кибербезопасность и правовые аспекты защиты данных."
                            },
                            {
                                time: "15:45 - 17:00",
                                title: `Панельная дискуссия: "Инновации в кибербезопасности"`,
                                text: "Обсуждение новейших технологий и инноваций в области киберзащиты."
                            },
                            {
                                time: "17:15 - 18:00",
                                title: `Заключительная сессия и закрытие`,
                                text: "Подведение итогов, награждение участников и официальное закрытие мероприятия."
                            },
                            {
                                time: "18:00 - 20:00",
                                title: `Фуршет и вечеринка`,
                                text: "Завершение дня с неформальным общением, вкусной едой и развлекательной программой."
                            }
                        ]
                    },
                ]
            },
            couchesData: [
                {
                    name: "Ион Берулешть",
                    proffession: "Инженер по кибербезопасности, специалист по защите данных в корпоративных сетях.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Dednev14.jpg"
                },
                {
                    name: "Ксения Малалига",
                    proffession: "Эксперт по киберзащите, опыт в ведущих IT-компаниях более 10 лет.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Dementeva4.jfif"
                },
                {
                    name: "Константин Киселев",
                    proffession: "ксперт по киберугрозам, консультант по безопасности для крупных компаний.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Farnikov4.jpg"
                },
                {
                    name: "Ольга Винтовка",
                    proffession: "Специалист по анализу уязвимостей, автор нескольких публикаций по кибербезопасности.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Fatieva4.jpg"
                }
            ],
            carouselImages: [
                { imgSrc: "https://sun1-1.userapi.com/c841620/v841620308/35a20/p6QMACvzlHw.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9ywG57qz5YrWTRhnZcChuDDoiFJjDbcK5g&s" },
                { imgSrc: "https://www.timacad.ru/uploads/media/cache/image_sm_resize/uploads/images/20240313/b_img65f1c8a43d36d2.28616322.jpg" },
                { imgSrc: "https://apkpro.ru/upload/resize_cache/iblock/45d/708_408_2/oa85xk6d8xivw4qne7mjmerhjetu9ny5.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFALhI_2dUwdbL_BoVvmqD2WZPHc8mks1dA&s" },
                { imgSrc: "https://cybergarden.ru/images/gallery/3.jpg" },
                { imgSrc: "https://sun9-8.userapi.com/impg/rRVEInEtdLs2N6QTirUyCM48iNJi-qIlnj01sg/WvY866-xq58.jpg?size=807x538&quality=95&sign=af40a278298591dbf14ef5e415246cc1&c_uniq_tag=rSAUpq8b4UEFcIXwpw5SN29R4jtag-UdgWdjKx1CzTU&type=album" }
            ]
        },
        {
            id: "itInnovation",
            couchesBackgroundImages: [
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20179.png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(3).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(1).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(2).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20181.png?raw=true"
            ],
            overviewTitle: "Фотографии с прошлых мероприятий",
            overviewParagraf: "Узнайте, как проходили наши прошлые мероприятия: посмотрите яркие фотографии, запечатлевшие увлекательные моменты, радость побед и живое общение участников и тренеров.",
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
                headerBackgroundImage: "https://raw.githubusercontent.com/DanyilHarma/Future-Academy-2.0/master/src/assets/images/images-events/day-of-it-innovation/DALL%C2%B7E%202024-06-18%2000.06.33.webp",
                headerTitle: "День IT инноваций",
                headerDescription: "Будущее технологий начинается здесь.",
                headerParagrafs: [
                    "Выступления ведущих <br> IT-экспертов и новаторов.",
                    "Уникальные мастер-классы и <br> воркшопы от лидеров <br> индустрии.",
                    "Возможность наладить связи <br> с профессионалами и <br> единомышленниками."
                ]
            },
            goals: {
                unionText: "Как только вы начнете-уже не сможете остановиться!",
                goal: [
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/4170/4170616.png", goalTitle: "Ведущие эксперты <br> IT-отрасли", goalText: "Получите ценные знания <br> и инсайты от признанных лидеров <br> индустрии на нашем мероприятии." },
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/17646/17646429.png", goalTitle: "Интерактивные <br> мастер-классы", goalText: "Участвуйте в практических <br> занятиях, где сможете сразу <br> применить полученные <br> знания и навыки." },
                    { imgSrc: "https://cdn-icons-png.flaticon.com/128/11703/11703495.png", goalTitle: "Нетворкинг и <br> обмен опытом", goalText: "Расширьте свой круг общения, <br> познакомьтесь с коллегами и наладьте <br> полезные контакты." }
                ]
            },
            programmData: {
                programmTitle: `Программа мероприятия "День IT инноваций"`,
                programmParagraf: `Наше событие предлагает насыщенную программу, включающую выступления ведущих экспертов IT-индустрии,
                интерактивные мастер-классы и уникальные возможности для нетворкинга. Участвуйте в обсуждениях новейших
                технологий и обмене опытом с коллегами.`,
                accordionData: [
                    {
                        dayTitle: "День первый",
                        events: [
                            {
                                time: "10:00 - 11:30",
                                title: "Открытие мероприятия и приветственное слово",
                                text: "Вступительное слово от организаторов и ключевых спикеров. Обзор программы и целей мероприятия."
                            },
                            {
                                time: "11:30 - 13:00",
                                title: "Панельная дискуссия: Будущее IT-инноваций",
                                text: "Ведущие эксперты обсудят перспективы развития IT-технологий и инноваций."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Время для отдыха и неформального общения."
                            },
                            {
                                time: "14:00 - 15:30",
                                title: "Мастер-класс: Искусственный интеллект в реальных проектах",
                                text: "Практическое занятие по использованию ИИ в различных сферах деятельности."
                            },
                            {
                                time: "15:30 - 17:00",
                                title: "Круглый стол: Кибербезопасность и защита данных",
                                text: "Эксперты поделятся опытом и обсудят актуальные вопросы кибербезопасности."
                            },
                            {
                                time: "17:00 - 18:00",
                                title: "Сессия вопросов и ответов",
                                text: "Возможность задать вопросы спикерам и обсудить интересующие темы."
                            },
                            {
                                time: "18:00 - 19:00",
                                title: "Networking-сессия",
                                text: "Время для неформального общения и обмена контактами среди участников."
                            }
                        ]
                    },
                    {
                        dayTitle: "День второй",
                        events: [
                            {
                                time: "10:00 - 11:30",
                                title: "Презентация новых IT-продуктов и решений",
                                text: "Компании представят свои новейшие разработки и инновационные продукты."
                            },
                            {
                                time: "11:30 - 13:00",
                                title: "Мастер-класс: Разработка мобильных приложений",
                                text: "Практическое занятие по созданию мобильных приложений с использованием современных технологий."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Возможность обсудить утренние сессии и обменяться идеями."
                            },
                            {
                                time: "14:00 - 15:30",
                                title: "Воркшоп: Виртуальная и дополненная реальность",
                                text: "Практическое занятие по использованию VR и AR в различных проектах."
                            },
                            {
                                time: "15:30 - 17:00",
                                title: "Заключительная панельная дискуссия",
                                text: "Подведение итогов мероприятия и обсуждение ключевых выводов."
                            },
                            {
                                time: "17:15 - 18:00",
                                title: "Закрытие мероприятия и фуршет",
                                text: "Время для неформального общения, обмена контактами и подведения итогов в неформальной обстановке."
                            },
                            {
                                time: "18:00 - 20:00",
                                title: "Вечеринка на закрытии",
                                text: "Заключительное мероприятие с музыкой, напитками и возможностью расслабиться после насыщенного дня."
                            }
                        ]
                    }
                ]
            },
            couchesData: [
                {
                    name: "Лина Кацолина",
                    proffession: "Эксперт в области кибербезопасности с 10-летним опытом работы.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Vlasova14.jpg"
                },
                {
                    name: "Юрий Серепило",
                    proffession: "Разработчик мобильных приложений, специалист по UI/UX дизайну.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Syprynenko4.jpg"
                },
                {
                    name: "Наталья Сумричкина",
                    proffession: "Старший разработчик ПО, специализирующийся на искусственном интеллекте.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Smirnova14.jpg"
                },
                {
                    name: "Михаил Зилороев",
                    proffession: "Инженер по виртуальной и дополненной реальности, опыт работы более 8 лет.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Pavlov14.jpg"
                }
            ],
            carouselImages: [
                { imgSrc: "https://sun1-1.userapi.com/c841620/v841620308/35a20/p6QMACvzlHw.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9ywG57qz5YrWTRhnZcChuDDoiFJjDbcK5g&s" },
                { imgSrc: "https://www.timacad.ru/uploads/media/cache/image_sm_resize/uploads/images/20240313/b_img65f1c8a43d36d2.28616322.jpg" },
                { imgSrc: "https://apkpro.ru/upload/resize_cache/iblock/45d/708_408_2/oa85xk6d8xivw4qne7mjmerhjetu9ny5.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFALhI_2dUwdbL_BoVvmqD2WZPHc8mks1dA&s" },
                { imgSrc: "https://cybergarden.ru/images/gallery/3.jpg" },
                { imgSrc: "https://sun9-8.userapi.com/impg/rRVEInEtdLs2N6QTirUyCM48iNJi-qIlnj01sg/WvY866-xq58.jpg?size=807x538&quality=95&sign=af40a278298591dbf14ef5e415246cc1&c_uniq_tag=rSAUpq8b4UEFcIXwpw5SN29R4jtag-UdgWdjKx1CzTU&type=album" }
            ]
        },
        {
            id: "creativeCoding",
            couchesBackgroundImages: [
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20179.png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(3).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(1).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(2).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20181.png?raw=true"
            ],
            overviewTitle: "Фотографии с прошлых мероприятий",
            overviewParagraf: "Узнайте, как проходили наши прошлые мероприятия: посмотрите яркие фотографии, запечатлевшие увлекательные моменты, радость побед и живое общение участников и тренеров.",
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
                headerBackgroundImage: "https://raw.githubusercontent.com/DanyilHarma/Future-Academy-2.0/master/src/assets/images/images-events/creative-coding/DALL%C2%B7E%202024-06-18%2000.41.57.webp",
                headerTitle: "Креативный кодинг",
                headerDescription: "Создай код, который вдохновляет.",
                headerParagrafs: [
                    "Развитие творческих <br> навыков программирования",
                    "Уникальные мастер-классы <br> от экспертов индустрии.",
                    "Возможность создания <br> проектов в команде."
                ]
            },
            goals: {
                unionText: "Как только вы начнете-уже не сможете остановиться!",
                goal: [
                    {
                        imgSrc: "https://cdn-icons-png.flaticon.com/128/3950/3950815.png",
                        goalTitle: "Вдохновение через код",
                        goalText: "Программирование как искусство. Узнай, как творческий подход может улучшить твои навыки."
                    },
                    {
                        imgSrc: "https://cdn-icons-png.flaticon.com/128/10822/10822332.png",
                        goalTitle: "Практические занятия",
                        goalText: "Программирование как искусство. Узнай, как творческий подход может улучшить твои навыки."
                    },
                    {
                        imgSrc: "https://cdn-icons-png.flaticon.com/128/1534/1534938.png",
                        goalTitle: "Командная <br> работа",
                        goalText: "Сотрудничество и обмен идеями. Найди единомышленников и создайте вместе что-то невероятное."
                    }
                ]
            },
            programmData: {
                programmTitle: `Программа мероприятия "Креативный кодинг"`,
                programmParagraf: `Этот интенсив по креативному кодингу объединяет программирование и творчество. Участники смогут развить
                свои навыки, создавая уникальные и вдохновляющие проекты. Мастер-классы и воркшопы помогут применить
                новые знания на практике.`,
                accordionData: [
                    {
                        dayTitle: "День первый",
                        events: [
                            {
                                time: "10:00 - 10:30",
                                title: "Открытие мероприятия: Знакомство с программой и участниками.",
                                text: "Участники познакомятся с расписанием мероприятия и друг с другом."
                            },
                            {
                                time: "10:30 - 11:30",
                                title: "Лекция: Введение в креативный кодинг и его возможности.",
                                text: "Основные концепции и примеры использования креативного кодинга."
                            },
                            {
                                time: "11:30 - 13:00",
                                title: "Мастер-класс: Основы визуального программирования",
                                text: "Практическое занятие по созданию простых визуальных проектов."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв: Нетворкинг и обсуждение идей.",
                                text: "Практическое занятие по использованию ИИ в различных сферах деятельности."
                            },
                            {
                                time: "14:00 - 16:00",
                                title: "Практическая сессия: Создание первого проекта.",
                                text: "Участники создадут свой первый проект под руководством наставников."
                            },
                            {
                                time: "16:00 - 17:00",
                                title: "Лекция: Примеры успешных креативных проектов.",
                                text: "Рассмотрение примеров успешных проектов для вдохновения."
                            },
                            {
                                time: "17:00 - 18:00",
                                title: "Завершение дня: Обзор выполненных проектов и план на второй день.",
                                text: "Обсуждение выполненных работ и планирование следующего дня."
                            }
                        ]
                    },
                    {
                        dayTitle: "День второй",
                        events: [
                            {
                                time: "10:00 - 11:00",
                                title: "Лекция: Углубление в сложные техники креативного кодинга.",
                                text: "Подробный разбор сложных техник и их применение."
                            },
                            {
                                time: "11:00 - 13:00",
                                title: "Воркшоп: Работа с интерактивными и анимационными элементами.",
                                text: "Практическое занятие по созданию интерактивных и анимационных элементов."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Возможность обсудить утренние сессии и обменяться идеями."
                            },
                            {
                                time: "14:00 - 16:00",
                                title: "Практическая сессия: Разработка группового проекта.",
                                text: "Участники объединятся в группы для совместной разработки проекта."
                            },
                            {
                                time: "16:00 - 17:00",
                                title: "Лекция: Презентация проектов и обратная связь.",
                                text: "Презентация готовых проектов и получение обратной связи от наставников."
                            },
                            {
                                time: "17:00 - 18:00",
                                title: "Закрытие мероприятия: Подведение итогов и награждение лучших работ.",
                                text: "Подведение итогов мероприятия и награждение участников за лучшие проекты."
                            }
                        ]
                    }
                ]
            },
            couchesData: [
                {
                    name: "Ксения Малалига",
                    proffession: "Эксперт по киберзащите, опыт в ведущих IT-компаниях более 10 лет.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Dementeva4.jfif"
                },
                {
                    name: "Константин Киселев",
                    proffession: "Эксперт по киберугрозам, консультант по безопасности для крупных компаний.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Farnikov4.jpg"
                },
                {
                    name: "Цветан Параплан",
                    proffession: "Эксперт по JavaScript-фреймворкам, 9 лет опыта, активный участник open-source проектов.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Galeta4.jpg"
                },
                {
                    name: "Алина Мерикова",
                    proffession: "Молодая и перспективная программистка, недавно закончившая технический университет с отличием.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/%D0%9C%D0%B5%D0%BB%D1%8C%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B04.jpg"
                }
            ],
            carouselImages: [
                { imgSrc: "https://sun1-1.userapi.com/c841620/v841620308/35a20/p6QMACvzlHw.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9ywG57qz5YrWTRhnZcChuDDoiFJjDbcK5g&s" },
                { imgSrc: "https://www.timacad.ru/uploads/media/cache/image_sm_resize/uploads/images/20240313/b_img65f1c8a43d36d2.28616322.jpg" },
                { imgSrc: "https://apkpro.ru/upload/resize_cache/iblock/45d/708_408_2/oa85xk6d8xivw4qne7mjmerhjetu9ny5.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFALhI_2dUwdbL_BoVvmqD2WZPHc8mks1dA&s" },
                { imgSrc: "https://cybergarden.ru/images/gallery/3.jpg" },
                { imgSrc: "https://sun9-8.userapi.com/impg/rRVEInEtdLs2N6QTirUyCM48iNJi-qIlnj01sg/WvY866-xq58.jpg?size=807x538&quality=95&sign=af40a278298591dbf14ef5e415246cc1&c_uniq_tag=rSAUpq8b4UEFcIXwpw5SN29R4jtag-UdgWdjKx1CzTU&type=album" }
            ]
        },
        {
            id: "designIntensive",
            couchesBackgroundImages: [
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20179.png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(3).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(1).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20(2).png?raw=true",
                "https://github.com/DanyilHarma/Future-Academy/blob/master/images/images-chess-page/Vector%20181.png?raw=true"
            ],
            overviewTitle: "Фотографии с прошлых мероприятий",
            overviewParagraf: "Узнайте, как проходили наши прошлые мероприятия: посмотрите яркие фотографии, запечатлевшие увлекательные моменты, радость побед и живое общение участников и тренеров.",
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
                headerBackgroundImage: "https://raw.githubusercontent.com/DanyilHarma/Future-Academy-2.0/master/src/assets/images/images-events/design-intensive/DALL%C2%B7E%202024-06-18%2013.19.32%20.webp",
                headerTitle: "Дизайн-интенсив",
                headerDescription: "Развивай свои дизайнерские навыки!",
                headerParagrafs: [
                    "Практические занятия с <br> опытными дизайнерами.",
                    "Углубленное изучение <br> новейших трендов дизайна.",
                    "Творческие задания <br> для каждого участника."
                ]
            },
            goals: {
                unionText: "Как только вы начнете-уже не сможете остановиться!",
                goal: [
                    {
                        imgSrc: "https://cdn-icons-png.flaticon.com/128/17646/17646429.png",
                        goalTitle: "Интерактивные <br> мастер-классы",
                        goalText: "Узнайте о лучших практиках <br> и секретах дизайна от <br> профессионалов."
                    },
                    {
                        imgSrc: "https://cdn-icons-png.freepik.com/256/17643/17643589.png?semt=ais_hybrid",
                        goalTitle: "Обучение современным <br> инструментам",
                        goalText: "Освойте новейшие программы <br> и инструменты для создания <br> впечатляющих дизайнов."
                    },
                    {
                        imgSrc: "https://cdn-icons-png.flaticon.com/128/15355/15355751.png",
                        goalTitle: "Творческая <br> атмосфера",
                        goalText: "Погрузитесь в атмосферу <br> креативности и вдохновения <br> на нашем интенсиве."
                    }
                ]
            },
            programmData: {
                programmTitle: `Программа мероприятия "Дизайн-интенсив"`,
                programmParagraf: `На <strong>Дизайн-интенсиве</strong> вы сможете углубиться в мир дизайна, освоить современные инструменты
                и методики, а также развить свои творческие способности. Программа мероприятия рассчитана на два
                насыщенных дня, полных практических занятий, мастер-классов и творческих сессий. Вы узнаете о последних
                трендах и техниках в дизайне, поработаете над реальными проектами и получите ценные советы от экспертов.`,
                accordionData: [
                    {
                        dayTitle: "День первый",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Регистрация участников",
                                text: "Участники проходят регистрацию и получают необходимые материалы для работы."
                            },
                            {
                                time: "10:00 - 11:00",
                                title: "Вступительное слово и знакомство",
                                text: "Организаторы приветствуют участников и рассказывают о программе мероприятия."
                            },
                            {
                                time: "11:00 - 13:00",
                                title: "Мастер-класс: Основы графического дизайна",
                                text: "Эксперт рассказывает о ключевых принципах и техниках графического дизайна."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Участники могут отдохнуть и пообщаться за обедом."
                            },
                            {
                                time: "14:00 - 16:00",
                                title: "Практическое занятие: Создание логотипа",
                                text: "Участники разрабатывают логотипы под руководством опытного дизайнера."
                            },
                            {
                                time: "16:00 - 18:00",
                                title: "Работа в группах: Разработка брендбука",
                                text: "Командная работа по созданию брендбука для вымышленной компании."
                            },
                            {
                                time: "18:00 - 19:00",
                                title: "Ответы на вопросы и обсуждение результатов",
                                text: "Обсуждение итогов дня, ответы на вопросы и обратная связь от преподавателей."
                            }
                        ]
                    },
                    {
                        dayTitle: "День второй",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Утренняя разминка и творческие упражнения",
                                text: "Творческая разминка и упражнения для пробуждения креативности."
                            },
                            {
                                time: "10:00 - 12:00",
                                title: "Мастер-класс: Веб-дизайн и пользовательский интерфейс",
                                text: "Обучение современным подходам к веб-дизайну и созданию UI."
                            },
                            {
                                time: "12:00 - 13:00",
                                title: "Практическое занятие: Прототипирование сайта",
                                text: "Практическое занятие по созданию прототипов веб-сайтов."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Обед для всех участников в специально организованной зоне питания."
                            },
                            {
                                time: "14:00 - 16:00",
                                title: "Работа над проектами: Разработка сайта",
                                text: "Участники разрабатывают дизайн сайта под руководством наставников."
                            },
                            {
                                time: "16:00 - 18:00",
                                title: "Индивидуальные консультации и рекомендации",
                                text: "Личные консультации с преподавателями по проектам участников."
                            },
                            {
                                time: "18:00 - 19:00",
                                title: "Ответы на вопросы и обсуждение результатов",
                                text: "Обсуждение итогов дня, ответы на вопросы и обратная связь от преподавателей."
                            }
                        ]
                    },
                    {
                        dayTitle: "День третий",
                        events: [
                            {
                                time: "09:00 - 10:00",
                                title: "Утренняя зарядка и настрой на день",
                                text: "Участники проводят зарядку и настраиваются на продуктивный день."
                            },
                            {
                                time: "10:00 - 12:00",
                                title: "Мастер-класс: Анимация и взаимодействие в дизайне",
                                text: "Обучение методам создания анимации и интерактивных элементов в дизайне."
                            },
                            {
                                time: "12:00 - 13:00",
                                title: "Практическое занятие: Анимация интерфейсов",
                                text: "Практическое занятие по созданию анимаций для интерфейсов."
                            },
                            {
                                time: "13:00 - 14:00",
                                title: "Обеденный перерыв",
                                text: "Обед в ресторане мероприятия. Свободное время для общения и отдыха."
                            },
                            {
                                time: "14:00 - 16:00",
                                title: "Работа над проектами: Финальная доработка",
                                text: "Участники завершают свои проекты под руководством наставников."
                            },
                            {
                                time: "16:00 - 17:00",
                                title: "Индивидуальные консультации и демонстрация работ",
                                text: "Личные консультации с преподавателями и демонстрация готовых работ."
                            },
                            {
                                time: "17:00 - 18:00",
                                title: "Фуршет",
                                text: "Вкусный фуршет для всех участников, возможность расслабиться и пообщаться в неформальной обстановке."
                            },
                            {
                                time: "18:00 - 21:00",
                                title: "Вечеринка",
                                text: "Вечеринка в честь завершения мероприятия, музыка, развлечения и отличное настроение."
                            }
                        ]
                    }
                ]
            },
            couchesData: [
                {
                    name: "Маруся Климова",
                    proffession: "Опытный фронтенд-разработчик с 10-летним стажем, специалист по HTML, CSS и JavaScript.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Kokorina14.jpg"
                },
                {
                    name: "Мария Магдалена",
                    proffession: "Ведущий специалист по UX/UI дизайну с 8-летним опытом, магистр цифрового дизайна.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Makarova4.jpg"
                },
                {
                    name: "Олег Майами",
                    proffession: "Backend-разработчик с 12-летним опытом, сертифицированный специалист по AWS и облачным технологиям.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/JigalkoA3.jpg"
                },
                {
                    name: "Цветан Параплан",
                    proffession: "Эксперт по JavaScript-фреймворкам, 9 лет опыта, активный участник open-source проектов.",
                    imgSrc: "https://f-academy.ru/content/setup/pics/teachers/Galeta4.jpg"
                }
            ],
            carouselImages: [
                { imgSrc: "https://sun1-1.userapi.com/c841620/v841620308/35a20/p6QMACvzlHw.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9ywG57qz5YrWTRhnZcChuDDoiFJjDbcK5g&s" },
                { imgSrc: "https://www.timacad.ru/uploads/media/cache/image_sm_resize/uploads/images/20240313/b_img65f1c8a43d36d2.28616322.jpg" },
                { imgSrc: "https://apkpro.ru/upload/resize_cache/iblock/45d/708_408_2/oa85xk6d8xivw4qne7mjmerhjetu9ny5.jpg" },
                { imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFALhI_2dUwdbL_BoVvmqD2WZPHc8mks1dA&s" },
                { imgSrc: "https://cybergarden.ru/images/gallery/3.jpg" },
                { imgSrc: "https://sun9-8.userapi.com/impg/rRVEInEtdLs2N6QTirUyCM48iNJi-qIlnj01sg/WvY866-xq58.jpg?size=807x538&quality=95&sign=af40a278298591dbf14ef5e415246cc1&c_uniq_tag=rSAUpq8b4UEFcIXwpw5SN29R4jtag-UdgWdjKx1CzTU&type=album" }
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