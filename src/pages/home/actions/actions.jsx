import classes from "./action.module.css"
import Quantity from "./quantity/quantity"
import quantityData from "./quantityData"
import AllSections from "./sections/allSections"



const Actions = (props) => {
    return (
        <div className="container">
            <Quantity quantityData={quantityData} />
            <AllSections />
        </div>
    )
}

export default Actions;