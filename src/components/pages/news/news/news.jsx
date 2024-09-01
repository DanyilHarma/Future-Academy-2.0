import classes from "./news.module.css"

const News = (props) => {

    const handleSelectNews = (news) => {
        props.handleSelectNews(news)
    }

    return (
        <div className="row">
            {props.row.map((news, index) => (
                <div key={index} className="col-4">
                    <div className={classes.gradientContainer}>
                        <div className={classes.gradientShadow}></div>
                        <div className={classes.news}>
                            <div className={classes.newsImage}>
                                <img src={news.imgSrc} alt="" />
                            </div>
                            <div className={classes.newsContent}>
                                <span>{news.date}</span>

                                <h3>{news.newsTitle}</h3>
                                <p>{news.newsText}</p>

                                <span className={classes.readMore} onClick={() => handleSelectNews(news)}>Подробнее <svg className={classes.arrow} width="22" height="16"
                                    viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M21.2071 8.70711C21.5976 8.31658 21.5976 7.68342 21.2071 7.29289L14.8431 0.928932C14.4526 0.538408 13.8195 0.538408 13.4289 0.928932C13.0384 1.31946 13.0384 1.95262 13.4289 2.34315L19.0858 8L13.4289 13.6569C13.0384 14.0474 13.0384 14.6805 13.4289 15.0711C13.8195 15.4616 14.4526 15.4616 14.8431 15.0711L21.2071 8.70711ZM0.5 9H20.5V7H0.5V9Z"
                                        fill="#00093C" />
                                </svg></span>
                            </div>
                        </div>
                    </div>
                </div>))}
        </div>
    )
}

export default News;