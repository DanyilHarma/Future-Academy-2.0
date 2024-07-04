import classes from "./popupCity.module.css"

const PopupCity = (props) => {


    return (
        <div className={classes.cityPopup}>
            <img src="/images/header-top-images/Group 830.png" alt="" style={{ marginRight: '8px', cursor: 'auto' }}
                className={classes.geo} />
            <li className={classes.cityMain}> Дубоссары</li>
            <img src="/images/header-top-images/Vector 197.png" alt="" className={classes.cityPopup} />
        </div>
    )

}

export default PopupCity;