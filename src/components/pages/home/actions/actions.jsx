import Quantity from "./quantity/quantity"
import AllSections from "./sections/allSections"



const Actions = (props) => {
    return (
        <div className="container">
            <Quantity />
            <AllSections />
        </div>
    )
}

export default Actions;