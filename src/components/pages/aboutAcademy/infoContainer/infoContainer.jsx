import Quantity from "../../home/actions/quantity/quantity";
import Offers from "./offers/offers";
import PartnersContainer from "./partnersContainer/partnersContainer";
import Programms from "./programms/programms";


const InfoContainer = (props) => {



    return (
        <div className="container">
            <Programms programmsData={props.programmsData} />
            <Quantity aboutPage={true} />
            <PartnersContainer partnersData={props.partnersData} />
            <Offers offersData={props.offersData} />
        </div>
    )
}

export default InfoContainer;