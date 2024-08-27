import HeaderBig from "./headerBig/headerBig.jsx"
import CoursesBlock from "./coursesBlock/coursesBlock.jsx"
import VideoBlock from "./videoBlock/videoBlock.jsx";
import Actions from "./actions/actions.jsx";
import ReviewsHomepage from "./rewiewsHomepage/reviewHomepage.jsx";
import WelcomeContainer from "./welcomeContainer/welcomeContainer.jsx";


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