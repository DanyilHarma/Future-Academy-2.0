import classes from "./formHelp.module.css"
import imageUnion from "../../assets/images/form-help-images/Union.png"
import ovlBigImage from "../../assets/images/form-help-images/ovl-big.png"

import { useLocation } from "react-router-dom"
import formHelpData from "./formHelpData.json"
import DOMPurify from "dompurify"



const FormHelp = (props) => {

    const location = useLocation()

    const isAuthPage = location.pathname === "/enter"
    const isTestPage = location.pathname === "/test"
    const isContactsPage = location.pathname === "/contacts"
    const isCareerPage = location.pathname === "/careerPage"

    const formHelpTitle =
        isContactsPage ? formHelpData.contactsPage.title
            : isCareerPage ? formHelpData.careerPage.title
                : formHelpData.allPages.title;

    const formHelpText =
        isContactsPage ? formHelpData.contactsPage.text
            : isCareerPage ? formHelpData.careerPage.text
                : formHelpData.allPages.text


    return (
        (isAuthPage || isTestPage) ? null : (<div className="container">
            <div className={classes.formShadowContainer}>
                <div className={classes.formHelpChoice} style={{ marginTop: props.isPopupFormHelp ? "0px" : "150px" }}>
                    <img src={imageUnion} alt="" style={{ left: "19%" }} />
                    <div className={classes.unionFormText}>
                        <div dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(formHelpTitle) }}></div>
                        <div dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(formHelpText) }}></div>
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