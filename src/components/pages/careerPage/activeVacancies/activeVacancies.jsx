import classes from "./activeVacancies.module.css"
import VacancyRow from "./vacancyRow/vacancyRow";


const ActiveVacancies = (props) => {

    const { firstRow, secondRow } = props.activeVacanciesData.vacancies

    return (
        <div className="container">
            <div className={classes.activeVacanciesContainer}>
                <h2>{props.activeVacanciesData.title}</h2>
                <div className={classes.rowsWrapper}>
                    <VacancyRow row={firstRow} />
                    <VacancyRow row={secondRow} />
                </div>
            </div>
        </div>
    )

}

export default ActiveVacancies; 