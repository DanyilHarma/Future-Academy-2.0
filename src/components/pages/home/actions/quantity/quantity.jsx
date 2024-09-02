import { useSelector } from "react-redux"
import classes from "./quantity.module.css"


const Quantity = (props) => {

    const quantityData = useSelector(state => state.actionSectionHomepage.quantity)

    let quantityElem = quantityData.map((elem, index) => <div key={index} className={classes.quantity}>
        <img src={elem.src} alt="" />
        <span dangerouslySetInnerHTML={{ __html: elem.text }} />
    </div>)
    return (
        <div className={classes.infoWrapperBottom}>
            {props.aboutPage ? null : (< h4 > Актуальные знания от признанных экспертов рынка <br />
                для новичков и практикующих специалистов.</h4>)}
            <div className={classes.quantityContainer} style={{ marginTop: props.aboutPage ? "100px" : null }}>
                {quantityElem}
            </div>
        </div >
    )
}

export default Quantity;