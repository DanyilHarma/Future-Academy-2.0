import DOMPurify from "dompurify";
import classes from "./offers.module.css"
import { NavLink } from "react-router-dom";

const Offers = (props) => {

    return (
        <div className={classes.offersContainer}>
            <div className="row">
                <h2>Нажми, если это о тебе</h2>
                {props.offersData.map((offer, index) => (
                    <div key={index} className="col-3">
                        <NavLink className={`${classes.shadowContainer}`}>
                            <div className={classes.gradientShadow}></div>
                            <div className={classes.offer} style={{ backgroundColor: offer.backgroundColor }}>
                                <img src={offer.imgSrc} alt="" />
                                <span dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(offer.text) }}></span>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Offers;