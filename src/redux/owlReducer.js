const SET_COURSE_OWL_TEXT = "SET_COURSE_OWL_TEXT"

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
        default: return state
    }
}

export const setCourseOwlText = (text) => ({ type: SET_COURSE_OWL_TEXT, text })

export default owlReducer;