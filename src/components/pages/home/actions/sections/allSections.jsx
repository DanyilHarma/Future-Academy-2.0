import classes from "./allSections.module.css"
import OpenDoor from "./openDoor/openDoor.jsx";
import SectionHome from "./section/sectionHome.jsx";


const AllSections = (props) => {
    return (
        <div>
            <OpenDoor />
            <SectionHome />
        </div>
    )
}

export default AllSections;