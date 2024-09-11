import HeaderBigCamp from "./headerBigCamp/headerBigCamp";
import data from "./summerCampData.json"
import classes from "./summerCampPageContainer.module.css"

const SummerCampPageContainer = () => {
    return (
        <>
            <HeaderBigCamp headerImages={data.Imagesheader} />
        </>
    )
}

export default SummerCampPageContainer;