import classes from "./programmsHome.module.css"
import image from "../../../../../../../assets/images/section-info/monitor.png"




const Programms = (props) => {
    return (
        <div className={classes.programms}>
            <img src={image} alt="" />
            <h4>Программы обучения</h4>
            <p>В списке наших курсов вы сможете найти <br /> профессию и занятие по душе, изучить новое <br /> и
                получить
                практические знания, которые <br /> помогут получить работу мечты.</p>
            <div className={classes.buttonProgramms} data-link="/main-landing/all-courses/index.html">
                <span>Подробнее</span>
                <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.87354 0.996582L7.68115 6.56201L1.87354 11.9655" stroke="black" strokeWidth="2"
                        strokeLinecap="round" />
                </svg>
            </div>
        </div>
    )
}

export default Programms;