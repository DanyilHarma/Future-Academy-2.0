import Programms from "./programmsHome/programmsHome";
import classes from "./sectionHome.module.css"
import ShadowContainer from "./shadowContainer/shadowContainer.";
import infoCards from "./sectionHomeData";
import InfoCardsHome from "./infoCardHome/infoCardHome";
import TestHome from "./testHome/testHome";



const SectionHome = (props) => {

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