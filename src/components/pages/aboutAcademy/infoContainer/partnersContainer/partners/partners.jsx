import classes from "./partners.module.css"

const Partners = (props) => {

    return (
        <div className={`row  ${props.first ? classes.first : ""}`}>
            {props.rows.map((row, index) => (
                <div className="col-2" key={index}>
                    <div className={classes.shadowContainer}>
                        <div className={classes.gradientShadow}></div>
                        <div className={classes.partner}>
                            <img src={row} alt="" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Partners;