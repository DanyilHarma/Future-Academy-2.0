import classes from "./formHelp.module.css"
import imageUnion from "../../assets/images/form-help-images/Union.png"
import ovlBigImage from "../../assets/images/form-help-images/ovl-big.png"
import { useLocation } from "react-router-dom"

const FormHelp = () => {

    const location = useLocation()

    const isAuthPage = location.pathname === "/enter"

    return (
        isAuthPage ? null : (<div className="container">
            <div className={classes.formShadowContainer}>
                <div className={classes.formHelpChoice}>
                    <img src={imageUnion} alt="" style={{ left: "19%" }} />
                    <div className={classes.unionFormText}>
                        <div>Помочь с выбором?</div>
                        <div>Оставьте заявку и наши специалисты <br /> свяжутся с вами, ответят на все вопросы <br />
                            и подберут подходящий вариант <br /> обучения.</div>
                    </div>
                    <img src={ovlBigImage} alt="" style={{ left: "-5%", top: "8%" }} />
                    <div className={classes.formShadow}></div>
                    <div className={classes.formInside}>
                        <form action="" className={classes.formHelp}>
                            <input type="text" placeholder="Ваше имя" name="Name" />
                            <div className={classes.buttomInput}>
                                <input type="tel" placeholder="Ваш телефон" name="Number" />
                                <input type="email" placeholder="Ваш e-mail" name="Email" />
                            </div>
                            <div className={classes.infoButtonForm}>
                                <p>
                                    Нажимая на кнопку, я соглашаюсь <br />
                                    на обработку персональных данных <br />
                                    и с правилами пользования <br /> Платформой
                                </p>
                                <button type="submit" className={classes.buttonFormHelp}>
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>)
    )

}

export default FormHelp;