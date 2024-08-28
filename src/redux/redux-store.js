import { combineReducers, legacy_createStore as createStore } from "redux";
import toggleReducer from "./togglePopupReducers.js"
import liHeaderReducer from "./liHeaderReducer.js";
import actionsSectionReducer from "./HomepageReducers/actionsSectionReducer.js";
import reviewsHomepageReducer from "./HomepageReducers/reviewsHomepageReducer.js";
import welcomeHomepageReducer from "./HomepageReducers/welcomeHomepageReducer.js";
import FooterReducer from "./footerReducer.js";
import coursesBlockReducer from "./HomepageReducers/coursesBlockReducer.js";
import coursePageFiltersReducer from "./CoursesPageReducers/coursePageFiltersReducer.js";
import everyCoursePageReducer from "./CoursesPageReducers/EveryCoursePageReducer/EveryCoursePageReducer.js";
import owlReducer from "./owlReducer.js";
import goalsReducer from "./goalReducer.js";
import { initializeState } from "./CoursesPageReducers/EveryCoursePageReducer/loaderImages.js";
import eventsPageReducer from "./EventsPageReducers/eventsPageReducer.js";

let reducers = combineReducers({
    liHeader: liHeaderReducer,
    togglePopup: toggleReducer,
    coursesBlock: coursesBlockReducer,
    filterCoursesPage: coursePageFiltersReducer,
    actionSectionHomepage: actionsSectionReducer,
    reviewHomepage: reviewsHomepageReducer,
    welcomeHomepage: welcomeHomepageReducer,
    everyCourse: everyCoursePageReducer,
    eventsPage: eventsPageReducer,
    owl: owlReducer,
    goals: goalsReducer,
    footer: FooterReducer,
})


export const configureStore = async (courseId) => {
    if (!courseId) {

        return createStore(reducers, {}); // Создаем store с пустым состоянием
    }
    const initialState = await initializeState(courseId);
    const store = createStore(reducers, initialState);
    window.store = store;
    return store;
}

// let store = createStore(reducers);

// window.store = store

// export default store;