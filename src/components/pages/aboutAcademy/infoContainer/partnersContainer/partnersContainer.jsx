import Partners from "./partners/partners";
import classes from "./partnersContainer.module.css"

const PartnersContainer = (props) => {

    const { firstRow, secondRow } = props.partnersData;

    return (
        <div className={classes.partnersContainer}>
            <h2>Наши партнеры</h2>
            <Partners rows={firstRow} first={true} />
            <Partners rows={secondRow} />
        </div>
    )
}

export default PartnersContainer;