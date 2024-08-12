const TOGGLE_POPUP = "TOGGLE-POPUP";

let initialState = {
    isPopupVisible: false
}

let toggleReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_POPUP: return {
            ...state,
            isPopupVisible: !state.isPopupVisible
        }
        default:
            return state;

    }
}

export const togglePopup = () => ({ type: TOGGLE_POPUP });

export default toggleReducer;