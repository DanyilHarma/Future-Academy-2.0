import { useState } from "react";
import classes from "./carouselOverview.module.css"
import Slider from "react-slick";

const CarouselOverview = (props) => {

    const [positionSlider, setPositionSlider] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
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

    const photos = props.carouselImages;

    const updateSlider = (current) => {
        const totalItems = photos.length;
        const persentage = (current / totalItems) * 100;
        setPositionSlider(persentage)
    }

    return (
        <>
            <div className={classes.owlCarousel}>
                <Slider {...settings}>
                    {photos.map((photo, index) => (<img key={index} src={photo.imgSrc} />))}
                </Slider>
            </div>
            <div className={`container ${classes.sliderContainer}`}>
                <div className={classes.slider}>
                    <div className={classes.sliderImage} style={{ left: `${positionSlider}%` }}></div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default CarouselOverview;