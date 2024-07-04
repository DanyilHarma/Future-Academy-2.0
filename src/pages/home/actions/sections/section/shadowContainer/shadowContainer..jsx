import classes from "./shadowContainer.module.css"



const ShadowContainer = (props) => {
    return (
        <div className={classes.containerShadow} style={props.style}>
            <div className={classes.shadowInfoBottom}></div>
            {props.children}
        </div>
    )
}

export default ShadowContainer;