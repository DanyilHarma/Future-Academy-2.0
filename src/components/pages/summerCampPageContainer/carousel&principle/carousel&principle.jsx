import CarouselOverview from "../../coursesPage/anyoneCourse/coursePageParts/coursesOverviewSection/carouselOverview/carouselOverview";
import WelcomeHomepage from "../../home/welcomeContainer/welcome/welcomeHomepage";
import classes from "./carousel&principle.module.css"


const CarouselPrincipleContainer = (props) => {

    const welcomeElement = props.principleData.map(principe => (<WelcomeHomepage key={principe.id} imgSrc={principe.imgSrc} text={principe.text} />))

    return (
        <div className={classes.carouselPrincipleContainer}>
            <div className={classes.carouselContainer}>
                <div className={classes.carouselInfo}><h3>Занятия проходят</h3>
                    <p>в современных аудиториях <br />
                        с удобством, комфортом и заботой о студентах</p>
                </div>
                <CarouselOverview carouselImages={props.carouseleData} />
            </div>
            <div className="container">
                <h2 className={classes.welcomeTitle}>Принципы обучения</h2>
                <div className={classes.welcomeInfo}>
                    {welcomeElement}
                </div>
            </div>
        </div>
    )
}

export default CarouselPrincipleContainer;