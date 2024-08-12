import { combineReducers, legacy_createStore as createStore } from "redux";
import toggleReducer from "./togglePopupReducers"
import dataPeopleCourseReducer from "./HomepageReducers/dataPeopleCourseReducer"
import liHeaderReducer from "./liHeaderReducer";
import actionsSectionReducer from "./HomepageReducers/actionsSectionReducer";
import reviewsHomepageReducer from "./HomepageReducers/reviewsHomepageReduce";

let reducers = combineReducers({
    liHeader: liHeaderReducer,
    togglePopup: toggleReducer,
    dataPeopleCourse: dataPeopleCourseReducer,
    actionSectionHomepage: actionsSectionReducer,
    reviewHomepage: reviewsHomepageReducer
})

let store = createStore(reducers);

export default store;