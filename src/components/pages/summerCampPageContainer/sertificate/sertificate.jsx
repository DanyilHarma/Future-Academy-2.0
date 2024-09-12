import classes from "./sertificate.module.css"
import sertificate from "../../../../assets/images/summerCampImages/Group.png"

const Sertificate = (props) => {
    return (
        <div className={`container ${classes.sertificateContainer}`}>
            <img src={sertificate} alt="" />
            <div className={classes.sertificateText}>
                <h2>Вручение сертификата </h2>
                <p>о прохождении летней программы,<br />
                    море позитивных впечатлений <br />
                    и приобретении полезных IT-навыков</p>
            </div>
        </div>
    )
}

export default Sertificate;