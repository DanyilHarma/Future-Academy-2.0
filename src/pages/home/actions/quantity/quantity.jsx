import classes from "./quantity.module.css"


const Quantity = ({ quantityData }) => {
    let quantityElem = quantityData.map((elem, index) => <div key={index} className={classes.quantity}>
        <img src={elem.src} alt="" />
        <span dangerouslySetInnerHTML={{ __html: elem.text }} />
    </div>)
    return (
        <div className={classes.infoWrapperBottom}>
            <h4>Актуальные знания от признанных экспертов рынка <br />
                для новичков и практикующих специалистов.</h4>
            <div className={classes.quantityContainer}>
                {quantityElem}
            </div>
        </div>
    )
}

export default Quantity;