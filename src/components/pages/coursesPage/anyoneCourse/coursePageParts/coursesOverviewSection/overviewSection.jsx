import DOMPurify from "dompurify";
import classes from "./overviewSection.module.css"
import CarouselOverview from "./carouselOverview/carouselOverview.jsx";
import PriceInfo from "./priceInfo/priceInfo.jsx";

const OverviewSection = (props) => {

    return (
        <>
            <div className="container">
                <section className={classes.overviewInfo}>
                    <h2 dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(props.isEvent ? props.title : props.overviewInfo.title) }}></h2>
                    <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(props.isEvent ? props.overviewParagraf : props.overviewInfo.offerParagraf) }}></p>
                </section>
            </div >
            <CarouselOverview carouselImages={props.isEvent ? props.carouselImages : props.overviewInfo.carouselImages} />
            {props.isEvent ? null : <PriceInfo dataPriceInfo={props.dataPriceInfo} />}
        </>
    )
}

export default OverviewSection;