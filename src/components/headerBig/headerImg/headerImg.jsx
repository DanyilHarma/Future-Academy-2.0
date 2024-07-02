import classes from "./headerImg.module.css"

const HeaderImg = (props) => {
    return (
        <div className="header-img">
            <img src="/images/header-images/Vector.png" className={classes.img} alt="" style={{ top: "18%", left: "11%" }}></img>
            <img src="/images/header-images/Vector (1).png" className={classes.img} alt="" style={{ top: "70%", left: "36%" }} />
            <img src="/images/header-images/Vector 178.png" className={classes.img} alt="" style={{ top: "55%", left: "91%" }} />
            <img src="/images/header-images/Vector 181.png" className={classes.img} alt="" style={{ top: "75%", left: "8%" }} />
            <img src="/images/header-images/Vector (2).png" className={classes.img} alt="" style={{ top: "8%", left: "56%" }} />
            <img src="/images/header-images/Vector.png" className={classes.img} alt="" style={{ top: "26%", left: "87%", width: "80px" }} />
            <img src="/images/header-images/Vector 179.png" className={classes.img} alt="" style={{ top: "47%", left: "48.78%" }} />
            <img src="/images/header-images/Vector 180.png" className={classes.img} alt="" style={{ top: "25.1%", left: "70%" }} />
        </div>
    )
}

export default HeaderImg;