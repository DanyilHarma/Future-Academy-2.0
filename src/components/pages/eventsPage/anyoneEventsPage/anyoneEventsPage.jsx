import { useDispatch, useSelector } from "react-redux";
import classes from "./anyoneEventsPage.module.css"
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AnyoneEventsHeader from "./anyoneEventsHeader/anyoneEventsHeader";
import AnyoneEventsGoals from "./anyoneEventsGoals/anyoneEventsGoals";
import { setCourseOwlText } from "../../../../redux/owlReducer";
import { setCourseGoalData } from "../../../../redux/goalReducer";
import MyAccordion from "../../coursesPage/anyoneCourse/coursePageParts/myAccordion/myAccordion";
import AnyoneEventsProgramm from "./anyoneEventsProgramm/anyoneEventsProgramm";
import Couches from "../../coursesPage/anyoneCourse/coursePageParts/couches/couches";
import { Carousel } from "bootstrap";
import OverviewSection from "../../coursesPage/anyoneCourse/coursePageParts/coursesOverviewSection/overviewSection";


const AnyoneEventsPage = (props) => {

    const dispatch = useDispatch();
    const { eventId } = useParams();
    const events = useSelector(state => state.anyoneEventsPage.events)

    const event = events.find(event => event.id === eventId)

    useEffect(() => {
        if (event && event.goals.goal && Array.isArray(event.goals.goal)) {
            dispatch(setCourseGoalData(event.goals.goal))
        }
        if (event && event.goals.unionText) {
            dispatch(setCourseOwlText(event.goals.unionText))
        }
    }, [event, dispatch])

    return (
        <>
            <AnyoneEventsHeader headerData={event.header} />
            <AnyoneEventsGoals />
            <AnyoneEventsProgramm programmData={event.programmData} />
            <Couches couchesData={event.couchesData} couchesBackgroundImages={event.couchesBackgroundImages} eventsBackgroundImages={true} />
            <OverviewSection carouselImages={event.carouselImages} title={event.overviewTitle} overviewParagraf={event.overviewParagraf} isEvent={true} />
        </>
    )
}

export default AnyoneEventsPage;