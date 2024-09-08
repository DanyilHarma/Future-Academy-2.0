import classes from "./diploma.module.css"

const Diploma = (props) => {

    const images = ["https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/header-images/Vector%20(1).png?raw=true",
        "https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/header-images/Vector%20(2).png?raw=true",
        "https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/header-images/Vector.png?raw=true"
    ]

    return (
        <div className={classes.diplomaGradient}>
            <div className={classes.gradientContainer}></div>
            <div className={classes.diploma}>
                <div className={classes.blue}>
                    {images.map((image, index) => (<img key={index} src={image} className={classes.absoluteImages} />))}
                    <img src="https://github.com/DanyilHarma/Future-Academy-2.0/blob/master/src/assets/images/header-top-images/Group%201L.png?raw=true" alt="" />
                    <div className={classes.diplomaName}>
                        <span>Диплом</span>
                        <span>{props.diplomaData}</span>
                    </div>
                </div>
                <div className={classes.white}>
                    <div className={classes.userInfo}>
                        <span>Александр Иванов</span>
                        <span>Успешно завершил обучение в академии будущего ХОД</span>
                    </div>
                    <div className={classes.organizersWrapper}>
                        <div>
                            <span>Кумар Генеральский</span>
                            <span>Генеральный директор</span>
                        </div>
                        <div>
                            <span>Алексей Огнев</span>
                            <span>Куратор курса</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diploma;