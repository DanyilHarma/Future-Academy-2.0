import HeaderBig from "./headerBig/headerBig"
import CoursesBlock from "./coursesBlock/coursesBlock"
import VideoBlock from "./videoBlock/videoBlock";
import Actions from "./actions/actions";
import ReviewsHomepage from "./rewiewsHomepage/reviewHomepage";


const Home = (props) => {
    return (
        <div>
            <HeaderBig />
            <CoursesBlock />
            <VideoBlock />
            <Actions />
            <ReviewsHomepage />
        </div>
    )
}

export default Home;