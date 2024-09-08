import classes from "./careerChoice.module.css"

const CareerChoice = (props) => {

    return (
        <div className={classes.careerChoiceContainer}>
            <h2>Трудоустройство или создание бизнеса</h2>
            <div className={classes.careerChoiceWrapper}>
                {props.careerChoiceData.map((choice, index) => (
                    <div key={index} className={classes.choice} style={{ backgroundColor: choice.backgroundColor }}>
                        <div className={classes.choiceDescription}>
                            <h5>{choice.employment}</h5>
                            <p>{choice.description}</p>
                        </div>
                        <div className={classes.income}>
                            <span>Планируемый доход:</span>
                            <span>{choice.income} в месяц</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CareerChoice;