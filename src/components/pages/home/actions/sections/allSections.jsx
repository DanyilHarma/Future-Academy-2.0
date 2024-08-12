import classes from "./allSections.module.css"
import OpenDoor from "./openDoor/openDoor";
import SectionHome from "./section/sectionHome";


const AllSections = (props) => {
    return (
        <div>
            <OpenDoor />
            <SectionHome />
        </div>
    )
}

export default AllSections;