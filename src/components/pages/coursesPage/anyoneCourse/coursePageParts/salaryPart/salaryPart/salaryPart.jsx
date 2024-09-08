import classes from "./salaryPart.module.css"

const SalaryPart = (props) => {

    const { salaryTitle, salary } = props.salaryData;

    return (
        <div className={classes.salaryContainer}>
            <h2>Сколько зарабатывает {salaryTitle}</h2>
            <div className={classes.salaryWrapper}>
                {salary.map((s, index) => (
                    <div key={index} className={classes.salary} style={{ backgroundColor: s.backgroundColor }}>
                        <span>{s.position}</span>
                        <p>{s.description}</p>
                        <span>от {s.salary} в месяц</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SalaryPart;