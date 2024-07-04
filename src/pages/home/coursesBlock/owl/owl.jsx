import classes from "./owl.module.css"

const Owl = (props) => {
    return (
        <div className={classes.owl}>
            <div className={classes.owlContainer}>
                <img src="/images/courses-images/Union-small.png" alt="" className={classes.unionSmall} />
                <div className={classes.owlTextContainer}>
                    <div className={classes.owlText}>
                        <span className={classes.bigText}>Кем вы хотите стать?</span><br />
                        <span className={classes.smallText}>Пора найти себя <br /> и выбрать подходящий <br /> курс :)</span>
                        <span className={classes.smallText}>Удачи!</span>
                    </div>
                </div>
            </div>
            <img src="/images/courses-images/owl-small.png" alt="" className={classes.owlSmall} />
        </div>
    )
}

export default Owl;