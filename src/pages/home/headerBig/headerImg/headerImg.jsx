import classes from "./headerImg.module.css"

let images = [
    { src: "/images/header-images/Vector.png", style: { top: "18%", left: "11%" } },
    { src: "/images/header-images/Vector (1).png", style: { top: "70%", left: "36%" } },
    { src: "/images/header-images/Vector 178.png", style: { top: "55%", left: "91%" } },
    { src: "/images/header-images/Vector 181.png", style: { top: "75%", left: "8%" } },
    { src: "/images/header-images/Vector (2).png", style: { top: "8%", left: "56%" } },
    { src: "/images/header-images/Vector.png", style: { top: "26%", left: "87%", width: "80px" } },
    { src: "/images/header-images/Vector 179.png", style: { top: "47%", left: "48.78%" } },
    { src: "/images/header-images/Vector 180.png", style: { top: "25.1%", left: "70%" } }
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