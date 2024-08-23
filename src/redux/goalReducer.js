const SET_COURSE_GOAL_DATA = "SET_COURSE_GOAL_DATA"

let initialState = {
    goals: [

    ]
}

const goalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COURSE_GOAL_DATA:
            return {
                ...state,
                goals: Array.isArray(action.data) ? action.data : []
            }
        default: return state
    }
}

export const setCourseGoalData = (data) => ({ type: SET_COURSE_GOAL_DATA, data })

export default goalsReducer;