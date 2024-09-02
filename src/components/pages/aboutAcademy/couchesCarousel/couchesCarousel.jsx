import { useState } from "react";
import classes from "./couchesCarousel.module.css"
import Slider from "react-slick";
import Couch from "./couch/couch.jsx";
import { useSelector } from "react-redux";

const CouchesCarousel = (props) => {

    const eventsBackgroundImages = useSelector(state => state.anyoneEventsPage.events.couchesBackgroundImages)
    const [positionSlider, setPositionSlider] = useState(0);

    const settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 5, // Количество видимых слайдов
        slidesToScroll: 2, // Количество слайдов за одно пролистывание
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        afterChange: (current) => updateSlider(current)
    }

    const updateSlider = (current) => {
        const totalItems = props.couchesCarouselData.length;
        const persentage = (current / totalItems) * 100;
        setPositionSlider(persentage)
    }

    return (

        <div className={classes.couchesContainer}>

            <div className={classes.backgroundImageContainer}></div>
            <div className={classes.couchesContainerBackgroundImages}>
                {Array.isArray(eventsBackgroundImages) && eventsBackgroundImages.map((image, index) => (
                    <img key={index} src={image} alt={`background-${index}`} />
                ))}
            </div>
            <h2>Наши люди</h2>
            <Slider {...settings} >
                {props.couchesCarouselData.map(couch => (<Couch key={couch.id} imgSrc={couch.imgSrc} name={couch.name} proffession={couch.proffession} />))}
            </Slider >

            <div className={classes.sliderContainer}>
                <div className={classes.reviewSlider} style={{ left: `${positionSlider}%` }}></div>
                <hr />
            </div>
        </div>

    )
}

export default CouchesCarousel;