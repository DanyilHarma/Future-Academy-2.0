import classes from "./society.module.css"
import data from "./societyData.json"

const Society = () => {
    return (
        <div className={classes.societyContainer}>
            <span>Войти с помощью соцсетей</span>
            <div className={classes.society}>
                {data.societyImages.map((image, index) => (
                    <a href="" key={index}><img src={image} alt="" /></a>
                ))}
            </div>
        </div>
    )
}

export default Society;