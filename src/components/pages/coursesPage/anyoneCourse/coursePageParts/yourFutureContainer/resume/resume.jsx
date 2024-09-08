import classes from "./resume.module.css"
import image from "../../../../../../../assets/images/images-all-courses-page/Ellipse 185.png"
import ResumeSkills from "./resumeSkills/resumeSkills";
import DiplomaContainera from "./diplomaContainer/diplomaContainer";


const Resume = (props) => {

    return (
        <div className={classes.resumeContainer}>
            <h2>Ваше будущее резюме</h2>
            <div className={classes.resumeWrapper}>
                <div className={classes.resumeHeader}>
                    <div className={classes.circleGradient}><img src={image} alt="" /></div>
                    <div className={classes.userInfo}>
                        <div>
                            <span>
                                Должность:
                            </span>
                            <span>
                                {props.resumeData.position}
                            </span>
                        </div>
                        <div>
                            <span>
                                Зарплата от:
                            </span>
                            <span>
                                {props.resumeData.salary}
                            </span>
                        </div>
                    </div>
                </div>
                <ResumeSkills skillsData={props.resumeData.skills} />
                <DiplomaContainera diplomaData={props.resumeData.position} />
            </div>
        </div>
    )
}

export default Resume;