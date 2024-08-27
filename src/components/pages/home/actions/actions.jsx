import Quantity from "./quantity/quantity.jsx"
import AllSections from "./sections/allSections.jsx"



const Actions = (props) => {
    return (
        <div className="container">
            <Quantity />
            <AllSections />
        </div>
    )
}

export default Actions;