


let initialState = {
    selectedLevelDifficult: "all",
    selectedTypeOfEducation: "all",
    // selectedDurationOfEducation: "all",
    courses: [
        {
            name: "Разработка мобильных <br> приложений",
            imgSrc: "",
            text: `Разработчик мобильных приложений создаёт <br> приложения, которыми люди ежедневно
                                    пользуются
                                    <br>
                                    на смартфонах, умных часах и планшетах.`
        }
    ]

}

const coursePageFiltersReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default coursePageFiltersReducer;