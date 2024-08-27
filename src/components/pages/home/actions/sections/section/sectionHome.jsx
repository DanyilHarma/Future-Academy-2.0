import Programms from "./programmsHome/programmsHome.jsx";
import classes from "./sectionHome.module.css"
import ShadowContainer from "./shadowContainer/shadowContainer.jsx";
import InfoCardsHome from "./infoCardHome/infoCardHome.jsx";
import TestHome from "./testHome/testHome.jsx";
import { useSelector } from "react-redux";



const SectionHome = (props) => {

    const infoCards = useSelector(state => state.actionSectionHomepage.infoCards)

    let cardsElements = infoCards.map((card, index) => <InfoCardsHome key={index} src={card.imgSrc} title={card.title} class={card.class} link={card.link} />)


    return (
        <div className={classes.sections}>
            <ShadowContainer >
                <Programms />
            </ShadowContainer>
            <div className={classes.wrapperThreeSection}>
                <div className={classes.newsItWrapper}>
                    {cardsElements}
                </div>
                <TestHome />
            </div>
        </div >
    )
}

export default SectionHome;