import DOMPurify from "dompurify";
import classes from "./priceInfo.module.css"

import PriceContainer from "./priceContainer/priceContainer";
import LazyLoad from "react-lazyload";

const PriceInfo = (props) => {

    const contentParagraf = props.dataPriceInfo.overviewSectionData.contentParagraf

    const priceImages = props.dataPriceInfo.overviewSectionData.priceImages;



    return (
        <>
            <div className="container">
                <div className={classes.priceInfo}>
                    <h2>Содержание курса</h2>
                    <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(contentParagraf) }}></p>
                    {priceImages.map((image, index) => (<LazyLoad key={index} offset={500}><img key={index} src={image.imgSrc} style={{ top: `${image.top}`, left: `${image.left}` }} /></LazyLoad>))}
                    <PriceContainer dataPriceInfo={props.dataPriceInfo} />
                </div>
            </div >
        </>
    )
}

export default PriceInfo;