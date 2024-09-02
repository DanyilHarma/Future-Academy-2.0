import classes from "./programms.module.css"

const Programms = (props) => {

    return (
        <div className={classes.programmsContainer}>
            <h2>Наши программы</h2>
            <div className="row">
                {props.programmsData.map((programm, index) => (
                    <div key={index} className={`col-2 ${classes.programm}`}>
                        <div className={classes.text}><span>{programm}</span></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programms;