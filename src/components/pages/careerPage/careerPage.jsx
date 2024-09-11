import { useEffect } from "react";
import AboutPart from "../coursesPage/anyoneCourse/coursePageParts/aboutPart/aboutPart";
import HeaderBig from "../home/headerBig/headerBig";
import classes from "./careerPage.module.css"
import { useDispatch } from "react-redux";
import careerData from "./careerData.json"
import partnersData from "../aboutAcademy/aboutAcademyData.json"
import { setCourseGoalData } from "../../../redux/goalReducer";
import { setCourseOwlText } from "../../../redux/owlReducer";
import AdvantagesFA from "./advantagesFA/advantagesFA";
import EmploymentPath from "./employmentPath/employmentPath";
import ActiveVacancies from "./activeVacancies/activeVacancies";
import PartnersContainer from "../aboutAcademy/infoContainer/partnersContainer/partnersContainer";
import SliderHomepage from "../home/rewiewsHomepage/sliderHomepage/sliderHomepage";
import WelcomeHomepage from "../home/welcomeContainer/welcome/welcomeHomepage";

const CareerPage = () => {

    const dispatch = useDispatch()

    const career = careerData;

    useEffect(() => {
        if (career && career.goalsData && Array.isArray(career.goalsData)) {
            dispatch(setCourseGoalData(career.goalsData))
        }
        if (career && career.unionText) {
            dispatch(setCourseOwlText(career.unionText))
        }
    }, [career, dispatch])

    let valuesElement = career.valuesData.values.map(value => (<WelcomeHomepage key={value.id} imgSrc={value.imgSrc} text={value.text} />))

    return (
        <>
            <HeaderBig />
            <AboutPart />
            <AdvantagesFA advantagesData={career.advantagesFA} />
            <EmploymentPath employmentPathData={career.employmentPathData} />
            <ActiveVacancies activeVacanciesData={career.activeVacanciesData} />
            <div className="container"><PartnersContainer partnersData={partnersData.aboutData.partners} isCareerPage={true} /></div>
            <SliderHomepage />
            <div className="container">
                <h2 className={classes.valuesTitle}>{career.valuesData.title}</h2>
                <div className={classes.valuesContainer}>
                    {valuesElement}
                </div>
            </div>
        </>
    )

}

export default CareerPage; 