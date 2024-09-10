import classes from "./modalFormHelp.module.css"
import closeButton from "../../../assets/images/form-help-images/Group 858.png"

const ModalFormHelp = ({ children, closePopup, openPopup }) => {
    if (!openPopup) return null;

    return (
        <>
            <div className={classes.overlay}></div>
            <div className={classes.modalWrapper}>
                <div className={classes.modalContent}>
                    <button className={classes.closeButton} onClick={closePopup}><img src={closeButton} alt="" /></button>
                    {children}
                </div>
            </div>
        </>
    )
}

export default ModalFormHelp