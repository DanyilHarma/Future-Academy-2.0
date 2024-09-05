import { NavLink } from "react-router-dom";
import classes from "./vacancyRow.module.css"


const VacancyRow = (props) => {
    return (
        <div className={classes.vacancyContainer}>
            {props.row.map((r, index) => (
                <NavLink to={r.link} key={index} className={classes.vacancySectionContainer} >
                    <div className={classes.gradientContainer}></div>
                    <div className={classes.vacancy} style={{ backgroundColor: r.backgroundColor }}>
                        <span>{r.name}</span>
                        <p>{r.description}</p>
                        <span>{r.salary}</span>
                    </div>
                </NavLink>
            ))}
        </div>
    )

}

export default VacancyRow; 