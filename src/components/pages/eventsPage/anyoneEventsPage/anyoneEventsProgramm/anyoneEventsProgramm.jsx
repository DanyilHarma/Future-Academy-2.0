
import DOMPurify from "dompurify";
import MyAccordion from "../../../coursesPage/anyoneCourse/coursePageParts/myAccordion/myAccordion";
import classes from "./anyoneEventsProgramm.module.css"



const AnyoneEventsProgramm = (props) => {

    return (
        <>
            <div className="container">
                <div className={classes.eventProgramm}>
                    <h2>{`Программа мероприятия ${props.programmData.programmTitle}`}</h2>
                    <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(props.programmData.programmParagraf) }}></p>
                </div>
            </div>
            <div className={classes.programm}>
                <MyAccordion accordionData={props.programmData.accordionData} type={"detailed"} />
            </div>
        </>
    )
}

export default AnyoneEventsProgramm;