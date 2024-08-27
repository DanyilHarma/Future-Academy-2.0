import VideoBlock from "../../../../home/videoBlock/videoBlock.jsx";
import ChessBenefites from "./chessBenefites/chessBenefites.jsx";
import InfoBlock from "./infoBlock/infoBlock.jsx";

const CourseblockInfo = (props) => {

    return (
        <>
            <VideoBlock videoData={props.infoData} />
            <InfoBlock infoData={props.infoData} />
            <ChessBenefites benefitesData={props.benefitesData} />
        </>
    )
}

export default CourseblockInfo;