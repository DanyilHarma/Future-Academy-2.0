import WelcomeHomepage from "../../../../home/welcomeContainer/welcome/welcomeHomepage";
import salaryData from "./salaryData.json"
import classes from "./salaryContainer.module.css"
import SalaryPart from "./salaryPart/salaryPart";

const SalaryContainer = (props) => {

    const values = salaryData

    let valuesElement = values.values.map(value => (<WelcomeHomepage key={value.id} imgSrc={value.imgSrc} text={value.text} />))

    return (
        <div className={`container ${classes.salaryContainer}`}>
            <h2>Принцип обучения</h2>
            <div className={classes.valuesContainer}>
                {valuesElement}
            </div>
            <SalaryPart salaryData={props.salaryData} />
        </div>
    )
}

export default SalaryContainer;