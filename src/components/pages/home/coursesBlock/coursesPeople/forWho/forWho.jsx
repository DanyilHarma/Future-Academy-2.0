import classes from "./forWho.module.css"


const ForWho = (props) => {

    return (
        <div className={classes.forWhoPeople} onClick={props.onClick}>
            <img src={props.imgSrc} alt={props.title} />
            <div className={classes.peopleText}>
                <span>{props.title}</span>
                <span>{props.age}</span>
            </div>
        </div>
    )
}

export default ForWho;