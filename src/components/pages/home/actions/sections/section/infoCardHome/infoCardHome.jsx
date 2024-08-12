import "./infoCardHome.css"
import ShadowContainer from "../shadowContainer/shadowContainer.";


const InfoCardsHome = (props) => {
    return (

        <ShadowContainer style={{ width: "100%", maxWidth: "320px", height: "100%", maxHeight: "220px" }}>
            <div className={props.class} data-link={props.link}>
                <img src={props.src} alt="" />
                <h4>{props.title}</h4>
            </div>
        </ShadowContainer>

    )
}

export default InfoCardsHome;