import classes from "./review.module.css";


const Review = (props) => {
    return (
        <div className={classes.review}>
            <div className={classes.accountInfoWrap}>
                <img src={props.imgPerson} alt={props.name} />
                <div className={classes.accountInfo}>
                    <div className={classes.accountName}>{props.name}</div>
                    <div className={classes.accountCourse}>{props.course}</div>
                </div>
            </div>
            <div className={classes.reviewText}>
                {props.text}
            </div>
            <div className={classes.reviewRating}><img src={props.rating.imgSrc} alt="" /> <span>{props.rating.stars}</span>
            </div>
        </div>
    )
}

export default Review;