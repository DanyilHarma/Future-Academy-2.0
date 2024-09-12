import classes from "./shiftDayCol.module.css"

const ShiftDayCol = ({ cols }) => {

    return (
        <>
            <div className={classes.shiftDayColumnWrapper}>
                {cols.start.map((startDate, index) => (
                    <div className={classes.shiftDay} key={index}>
                        <span>{startDate}</span>
                        <hr />
                        <span>{cols.finish[index]}</span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ShiftDayCol;