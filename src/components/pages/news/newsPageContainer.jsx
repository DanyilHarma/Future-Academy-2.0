import Breadcrumbs from "../../breadcrumb/breadcrumb";
import classes from "./newsPageContainer.module.css"
import data from "./newsData.json"
import News from "./news/news";
import { useState } from "react";
import SelectedNews from "./news/selectedNews/selectedNews";

const NewsPageContainer = (props) => {

    const newsData = data.newsData;

    const [selectedNews, setNews] = useState(null);

    const handleSelectNews = (news) => {
        setNews(news);
    }

    const handleBackNews = () => {
        setNews(null);
    }

    return (
        <>
            <div className="container">
                <Breadcrumbs />
            </div>
            {selectedNews ? (<SelectedNews selectedNews={selectedNews} backImage={newsData.backImage} handleBackNews={handleBackNews} />) : (<div className={`container ${classes.newsPageContainer}`}>
                <h1>Новости ХОД Future Academy</h1>
                <div className={classes.newsWrapper}>
                    <News newsData={newsData} row={newsData.firstRow} handleSelectNews={handleSelectNews} />
                    <News newsData={newsData} row={newsData.secondRow} handleSelectNews={handleSelectNews} />
                </div>
            </div>
            )}
        </>
    )
}

export default NewsPageContainer;