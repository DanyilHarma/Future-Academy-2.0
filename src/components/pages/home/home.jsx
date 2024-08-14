import HeaderBig from "./headerBig/headerBig"
import CoursesBlock from "./coursesBlock/coursesBlock"
import VideoBlock from "./videoBlock/videoBlock";
import Actions from "./actions/actions";
import ReviewsHomepage from "./rewiewsHomepage/reviewHomepage";
import WelcomeContainer from "./welcomeContainer/welcomeContainer";


const Home = (props) => {
    return (
        <div>
            <HeaderBig />
            <CoursesBlock />
            <VideoBlock />
            <Actions />
            <ReviewsHomepage />
            <WelcomeContainer />
        </div>
    )
}

export default Home;