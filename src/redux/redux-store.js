import { combineReducers, legacy_createStore as createStore } from "redux";
import toggleReducer from "./togglePopupReducers"
import liHeaderReducer from "./liHeaderReducer";
import actionsSectionReducer from "./HomepageReducers/actionsSectionReducer";
import reviewsHomepageReducer from "./HomepageReducers/reviewsHomepageReducer";
import welcomeHomepageReducer from "./HomepageReducers/welcomeHomepageReducer";
import FooterReducer from "./footerReducer";
import coursesBlockReducer from "./HomepageReducers/coursesBlockReducer";
import coursePageFiltersReducer from "./CoursesPageReducers/coursePageFiltersReducer";
import everyCoursePageReducer from "./CoursesPageReducers/EveryCoursePageReducer/EveryCoursePageReducer";
import owlReducer from "./owlReducer";
import goalsReducer from "./goalReducer";

let reducers = combineReducers({
    liHeader: liHeaderReducer,
    togglePopup: toggleReducer,
    coursesBlock: coursesBlockReducer,
    everyCourse: everyCoursePageReducer,
    filterCoursesPage: coursePageFiltersReducer,
    actionSectionHomepage: actionsSectionReducer,
    reviewHomepage: reviewsHomepageReducer,
    welcomeHomepage: welcomeHomepageReducer,
    owl: owlReducer,
    goals: goalsReducer,
    footer: FooterReducer,
})

let store = createStore(reducers);

window.store = store

export default store;