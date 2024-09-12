import HeaderBigCamp from "./headerBigCamp/headerBigCamp";
import data from "./summerCampData.json"
import classes from "./summerCampPageContainer.module.css"
import AboutSummerCamp from "./aboutSummerCamp/aboutSummerCamp";
import Sertificate from "./sertificate/sertificate";
import Schedule from "./schedule/schedule";
import CarouselOverview from "../coursesPage/anyoneCourse/coursePageParts/coursesOverviewSection/carouselOverview/carouselOverview";
import CarouselPrincipleContainer from "./carousel&principle/carousel&principle";

const SummerCampPageContainer = () => {


    return (
        <>
            <HeaderBigCamp headerImages={data.Imagesheader} />
            <AboutSummerCamp aboutData={data.aboutSummerCampData} />
            <Sertificate />
            <Schedule schedulesData={data.schedulesData} />
            <CarouselPrincipleContainer carouseleData={data.carouselImages} principleData={data.principle} />
        </>
    )
}

export default SummerCampPageContainer;