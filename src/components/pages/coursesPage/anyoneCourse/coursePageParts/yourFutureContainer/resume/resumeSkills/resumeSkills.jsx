import classes from "./resumeSkills.module.css"
import ResumeColumns from "./resumeColumns/resumeColumns";


const ResumeSkills = (props) => {

    const { firstCol, secondCol } = props.skillsData

    return (
        <div className={classes.skillsWrapper}>
            <span>Профессиональные навыки:</span>
            <div className={classes.skills}>
                <div>
                    <ul>
                        <ResumeColumns cols={firstCol} />
                    </ul>
                </div>
                <div>
                    <ul>
                        <ResumeColumns cols={secondCol} />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResumeSkills;