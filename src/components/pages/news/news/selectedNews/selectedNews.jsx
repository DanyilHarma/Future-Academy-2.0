import DOMPurify from "dompurify";
import classes from "./selectedNews.module.css"


const SelectedNews = (props) => {
    return (
        <div className={`container ${classes.newsFullDetails}`}>
            <button className={classes.backToAllNews} onClick={props.handleBackNews}><img src={props.backImage} alt="" /></button>
            <div className={classes.newsFullContent}>
                <h1>{props.selectedNews.newsTitle}</h1>
                <span>{props.selectedNews.date}</span>
                <p>{props.selectedNews.firstParagraf}</p>
                <img src={props.selectedNews.imgSrc} alt="" />
                <p dangerouslySetInnerHTML={{ "__html": DOMPurify.sanitize(props.selectedNews.secondParagraf) }}></p>
            </div>
        </div>
    )
}

export default SelectedNews;