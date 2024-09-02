import { useDispatch } from "react-redux";
import HeaderBig from "../home/headerBig/headerBig";
import aboutAcademyData from "./aboutAcademyData.json"
import { useEffect } from "react";
import { setAboutOwlText } from "../../../redux/owlReducer";
import { setCourseGoalData } from "../../../redux/goalReducer";
import AboutPart from "../coursesPage/anyoneCourse/coursePageParts/aboutPart/aboutPart";
import VideoBlock from "../home/videoBlock/videoBlock";
import CreatorAndValuesContainer from "./CreatorAndValuesContainer/CreatorAndValuesContainer";
import CouchesCarousel from "./couchesCarousel/couchesCarousel";
import InfoContainer from "./infoContainer/infoContainer";

const AboutAcademy = () => {
    const dispatch = useDispatch();

    const data = aboutAcademyData;

    useEffect(() => {
        if (data && data.aboutData.goals && Array.isArray(data.aboutData.goals)) {
            dispatch(setCourseGoalData(data.aboutData.goals))
        }
        if (data && data.aboutData.unionText && data.aboutData.unionTitle) {
            dispatch(setAboutOwlText(data.aboutData.unionTitle, data.aboutData.unionText))
        }
    }, [data, dispatch])

    return (
        <div>
            <HeaderBig />
            <AboutPart aboutAcademy={true} />
            <VideoBlock />
            <CreatorAndValuesContainer aboutCreatorData={data.aboutData.aboutCreatorData} valuesData={data.aboutData.values} />
            <CouchesCarousel couchesCarouselData={data.aboutData.couchesCarouselData} />
            <InfoContainer programmsData={data.aboutData.programms} partnersData={data.aboutData.partners} offersData={data.aboutData.offers} />
        </div>
    )
}

export default AboutAcademy;