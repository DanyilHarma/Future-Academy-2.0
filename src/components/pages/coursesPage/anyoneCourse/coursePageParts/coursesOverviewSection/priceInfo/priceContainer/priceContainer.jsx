import classes from "./priceContainer.module.css"
import owlImage from "../../../../../../../../assets/images/images-all-courses-page/images-chess-page/owl-price.png"
import unionImage from "../../../../../../../../assets/images/images-all-courses-page/images-chess-page/union-price.png"

const PriceContainer = (props) => {

    const { durationOfEducation, modeOfEducation, coursePrice } = props.dataPriceInfo.header

    return (
        <>
            <div className={classes.priceContainer}>
                <div className={classes.priceContent}>
                    <div className={classes.infoBlock}>
                        <br />
                        <div className={classes.text}>
                            Срок обучения: <br />
                            {durationOfEducation}
                        </div>
                    </div>
                    <div className={classes.infoBlock}>
                        <br />
                        <div className={classes.text}>
                            Режим занятий: <br />
                            {modeOfEducation}</div>
                    </div>
                </div>
                <div className={classes.owlPrice}>
                    <img src={owlImage} alt="" style={{ top: "75%", left: "80%" }} />
                    <div className={classes.priceTextUnion}>
                        <span>1 занятие бесплатное</span>
                        <img src={unionImage} alt="" style={{ top: "-51px", left: "51%" }} />
                    </div>
                </div>
            </div>
            <div className={classes.infoBlock}>
                <div className={classes.textBold}>
                    {coursePrice}
                    <div className={classes.priceButton}>Записаться на курс</div>
                </div>
            </div>
        </>
    )
}

export default PriceContainer;