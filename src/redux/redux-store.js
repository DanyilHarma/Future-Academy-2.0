import { combineReducers, legacy_createStore as createStore } from "redux";
import toggleReducer from "./togglePopupReducers"
import liHeaderReducer from "./liHeaderReducer";
import actionsSectionReducer from "./HomepageReducers/actionsSectionReducer";
import reviewsHomepageReducer from "./HomepageReducers/reviewsHomepageReducer";
import welcomeHomepageReducer from "./HomepageReducers/welcomeHomepageReducer";
import FooterReducer from "./footerReducer";
import coursesBlockReducer from "./HomepageReducers/coursesBlockReducer";
import coursePageFiltersReducer from "./CoursesPageReducers/coursePageFiltersReducer";

let reducers = combineReducers({
    liHeader: liHeaderReducer,
    togglePopup: toggleReducer,
    coursesBlock: coursesBlockReducer,
    filterCoursesPage: coursePageFiltersReducer,
    actionSectionHomepage: actionsSectionReducer,
    reviewHomepage: reviewsHomepageReducer,
    welcomeHomepage: welcomeHomepageReducer,
    footer: FooterReducer,
})

let store = createStore(reducers);

window.store = store

export default store;