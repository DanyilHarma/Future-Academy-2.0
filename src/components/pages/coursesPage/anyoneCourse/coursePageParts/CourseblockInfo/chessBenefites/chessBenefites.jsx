import DOMPurify from "dompurify";
import classes from "./chessBenefites.module.css"

const ChessBenefites = (props) => {

    return (
        <div className={classes.chessBenefitesContainer}>
            <div className="container">
                <div className={classes.chessBenefitestexts}>
                    {props.benefitesData.advantages.map((benefite, index) => (
                        <div key={index} className={classes.benefiteText} dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(benefite) }}>
                        </div>
                    ))}
                </div>
                <div className={classes.benefiteButton}>Записаться на курс</div>
            </div>
        </div>
    )
}

export default ChessBenefites;