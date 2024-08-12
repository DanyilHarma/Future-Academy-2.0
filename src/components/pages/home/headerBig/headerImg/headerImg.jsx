import classes from "./headerImg.module.css"
import img1 from "../../../../../assets/images/header-images/Vector.png"
import img2 from "../../../../../assets/images/header-images/Vector (1).png"
import img3 from "../../../../../assets/images/header-images/Vector 178.png"
import img4 from "../../../../../assets/images/header-images/Vector 181.png"
import img5 from "../../../../../assets/images/header-images/Vector (2).png"
import img6 from "../../../../../assets/images/header-images/Vector.png"
import img7 from "../../../../../assets/images/header-images/Vector 179.png"
import img8 from "../../../../../assets/images/header-images/Vector 180.png"


let images = [
    { src: img1, style: { top: "18%", left: "11%" } },
    { src: img2, style: { top: "70%", left: "36%" } },
    { src: img3, style: { top: "55%", left: "91%" } },
    { src: img4, style: { top: "75%", left: "8%" } },
    { src: img5, style: { top: "8%", left: "56%" } },
    { src: img6, style: { top: "26%", left: "87%", width: "80px" } },
    { src: img7, style: { top: "47%", left: "48.78%" } },
    { src: img8, style: { top: "25.1%", left: "70%" } }
];

let imagesElement = images.map((image, index) => <img key={index} src={image.src} className={classes.img} style={image.style}></img>)

const HeaderImg = (props) => {
    return (
        <div className="header-img">
            {imagesElement}
        </div>
    )
}

export default HeaderImg;