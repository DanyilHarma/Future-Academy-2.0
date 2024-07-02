import classes from "./coursesPeople.module.css"

const CoursesPeople = (props) => {
    return (
        <div className={classes.forWho}>
            <div className={classes.forWhoPeople} data-target="0">
                <img src="/images/courses-images/children.png" alt="" />
                <div className={classes.peopleText}>
                    <span>Дети</span>
                    <span>8 — 14 лет</span>
                </div>
            </div>
            <div className={classes.forWhoPeople} data-target="1">
                <img src="/images/courses-images/children (1).png" alt="" />
                <div className={classes.peopleText}>
                    <span>Подростки</span>
                    <span>14 — 18 лет</span>
                </div>
            </div>

            <div className={classes.forWhoPeople} data-target="2">
                <img src="/images/courses-images/family.png" alt="" />
                <div className={classes.peopleText}>
                    <span>Взрослые</span>
                    <span>18 — <span style={{ fontSize: "13px" }}>∞</span></span>
                </div>
            </div>
            <hr className={classes.indicator} style={{ height: "5px" }} />
        </div >
    )
}

export default CoursesPeople;