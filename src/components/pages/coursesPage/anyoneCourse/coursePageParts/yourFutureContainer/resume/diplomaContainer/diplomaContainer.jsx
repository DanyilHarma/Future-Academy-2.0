import Diploma from "./diploma/diploma";
import classes from "./diplomaContainer.module.css"

const DiplomaContainer = (props) => {

    return (
        <div className={classes.diplomaWrapper}>
            <Diploma diplomaData={props.diplomaData} />

            <div className={classes.diplomaText}>
                <h3>Диплом ХОД Future Academy</h3>
                <p>Подтвердит, что вы прошли курс, и станет дополнительным аргументом <br /> при устройстве на работу.</p>
            </div>
        </div>
    )
}

export default DiplomaContainer;