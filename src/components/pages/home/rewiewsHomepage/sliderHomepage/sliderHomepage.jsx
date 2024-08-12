import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import classes from "./sliderHomepage.module.css"
import { useSelector } from "react-redux";
import Review from "./review/review";
import { useState } from "react";


const SliderHomepage = (props) => {

    const [positionSlider, setPositionSlider] = useState(0);

    // const sliderRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4, // Количество видимых слайдов
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
    };

    const reviews = useSelector(state => state.reviewHomepage.rewiewDataHomepage);

    const reviewElement = reviews.map(review => (<Review key={review.id} imgPerson={review.imgSrc} name={review.name} course={review.course} text={review.text} rating={review.rating} />))

    function updateSlider(current) {
        const totalItems = reviews.length;
        const persentage = (current / totalItems) * 100;
        setPositionSlider(persentage)
    }

    return (
        <div className={classes.reviews}>
            <h2>Отзывы наших студентов</h2>
            <Slider {...settings}>
                {reviewElement}
            </Slider>
            <div className={classes.sliderContainer}>
                <div className={classes.sliderReview} style={{ left: `${positionSlider}%` }}></div>
                <hr />
            </div>
        </div>
    )
}

export default SliderHomepage;