import LazyLoad from "react-lazyload";
import classes from "./anyoneCourseHeader.module.css"

const AnyoneCourseHeader = (props) => {

    const course = props.course.header

    return (
        <div className={classes.headerMain}>
            <div className="container" style={{ position: "relative" }}>
                <div className={classes.headerMainContent}>
                    <div className={classes.headerMainCol}>
                        <h1>{course.headerTitle}</h1>
                        <span className={classes.headerDescription}>{course.headerDescription}</span>
                        <div className={classes.headerMainInfo}>
                            <div className={classes.infoBlock}>
                                <br />
                                <div className={classes.text}>
                                    Срок обучения: <br />
                                    {course.durationOfEducation}
                                </div>
                            </div>
                            <div className={classes.infoBlock}>
                                <br />
                                <div className={classes.text}>
                                    Режим занятий: <br />
                                    {course.modeOfEducation}</div>
                            </div>
                        </div>
                        <div className={classes.infoBlock}>
                            <br />
                            <div className={classes.text}>
                                <span>{course.coursePrice}</span>
                            </div>
                        </div>
                        <div className={classes.trialLessonHeader}>
                            <span>1 занятие бесплатное</span>
                            <div>Прежде чем начать
                                обучение советуем записаться на пробное заниятие</div>
                            <div className={classes.trialLessonButton}>
                                Записаться на пробное занятие
                            </div>
                        </div>
                    </div>
                    <div className={classes.headerImage}>
                        <LazyLoad height={536} offset={100}><img src={course.headerImageBackground} alt="" /></LazyLoad>
                    </div>
                </div>
                {course.headerImages.map((image, index) => <LazyLoad key={index} offset={100}> <img className={classes.headerImages} key={index} src={image.imgSrc} style={{ top: `${image.top}`, left: `${image.left}`, width: `${image.width}` }} /></LazyLoad>)}
            </div>
        </div >
    )
}

export default AnyoneCourseHeader;