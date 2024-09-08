import classes from "./resumeColumns.module.css"

const ResumeColumns = (props) => {
    return (
        <>
            {props.cols.map((col, index) => (
                <li key={index} className={classes.skillsList}>
                    {col}
                </li>
            ))}
        </>
    )
}

export default ResumeColumns;