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
import { initializeState } from "./CoursesPageReducers/EveryCoursePageReducer/loaderImages";

let reducers = combineReducers({
    liHeader: liHeaderReducer,
    togglePopup: toggleReducer,
    coursesBlock: coursesBlockReducer,
    filterCoursesPage: coursePageFiltersReducer,
    actionSectionHomepage: actionsSectionReducer,
    reviewHomepage: reviewsHomepageReducer,
    welcomeHomepage: welcomeHomepageReducer,
    everyCourse: everyCoursePageReducer,
    owl: owlReducer,
    goals: goalsReducer,
    footer: FooterReducer,
})


export const configureStore = async () => {
    const initialState = await initializeState();
    const store = createStore(reducers, initialState)
    window.store = store
    return store
}
// let store = createStore(reducers);

// window.store = store

// export default store;