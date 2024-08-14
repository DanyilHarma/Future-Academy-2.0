import classes from "./childrenColumn.module.css"

const ChildrenColumn = (props) => {

    return (
        <>
            <a href={props.link} className={classes.aFooter}>{props.label}</a>
        </>
    )
}

export default ChildrenColumn;