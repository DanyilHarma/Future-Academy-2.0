const SET_COURSE_OWL_TEXT = "SET_COURSE_OWL_TEXT"
const SET_ABOUT_OWL_TEXT = "SET_ABOUT_OWL_TEXT"

let initialState = {
    bigText: "",
    smallText: "",
    smallTextSecond: ""
}

const owlReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COURSE_OWL_TEXT:
            return {
                ...state,
                smallText: action.text
            }
        case SET_ABOUT_OWL_TEXT:
            return {
                ...state,
                bigText: action.bigText,
                smallText: action.text
            }
        default: return state
    }
}

export const setCourseOwlText = (text) => ({ type: SET_COURSE_OWL_TEXT, text: text })
export const setAboutOwlText = (bigText, text) => ({ type: SET_ABOUT_OWL_TEXT, bigText: bigText, text: text })

export default owlReducer;