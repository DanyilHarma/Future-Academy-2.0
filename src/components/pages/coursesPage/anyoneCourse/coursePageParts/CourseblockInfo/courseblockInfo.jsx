import VideoBlock from "../../../../home/videoBlock/videoBlock";
import ChessBenefites from "./chessBenefites/chessBenefites";
import InfoBlock from "./infoBlock/infoBlock";

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