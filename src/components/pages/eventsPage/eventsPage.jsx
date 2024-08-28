import classes from "./eventsPage.module.css"
import Breadcrumbs from "../../breadcrumb/breadcrumb";
import OpenDoor from "../home/actions/sections/openDoor/openDoor";
import EventsSection from "./eventsSection/eventsSection";

const EventsPage = (props) => {
    return (
        <>
            <div className="container">
                <Breadcrumbs />
            </div>
            <div className={`container ${classes.allEvents}`}>
                <h1>Все мероприятия</h1>
                <div className={classes.allEventsContent}>
                    <OpenDoor />
                    <EventsSection />
                </div>
            </div>
        </>
    )
}

export default EventsPage;