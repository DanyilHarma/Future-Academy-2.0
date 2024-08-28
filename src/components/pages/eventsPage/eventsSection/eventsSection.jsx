import { useSelector } from "react-redux";
import classes from "./eventsSection.module.css"
import EventsRow from "./eventsRow/eventsRow";

const EventsSection = (props) => {

    const { firstRow, secondRow, thirdRow } = useSelector(state => state.eventsPage.events)

    return (
        <>
            <EventsRow rows={firstRow} isSpecialyStyle={false} />
            <EventsRow rows={secondRow} isSpecialyStyle={true} />
            <EventsRow rows={thirdRow} isSpecialyStyle={false} />
        </>
    )
}

export default EventsSection;
