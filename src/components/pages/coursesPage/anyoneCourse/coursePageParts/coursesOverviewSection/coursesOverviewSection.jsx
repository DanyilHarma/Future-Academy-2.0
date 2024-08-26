
import DOMPurify from "dompurify";
import classes from "./coursesOverviewSection.module.css"
import CarouselOverview from "./carouselOverview/carouselOverview";
import PriceInfo from "./priceInfo/priceInfo";

const CoursesOverviewSection = (props) => {

    const { title, offerParagraf, carouselImages } = props.overviewInfo

    return (
        <>
            <div className="container">
                <section className={classes.overviewInfo}>
                    <h2 dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(title) }}></h2>
                    <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(offerParagraf) }}></p>
                </section>
            </div >
            <CarouselOverview carouselImages={carouselImages} />
            <PriceInfo dataPriceInfo={props.dataPriceInfo} />
        </>
    )
}

export default CoursesOverviewSection;