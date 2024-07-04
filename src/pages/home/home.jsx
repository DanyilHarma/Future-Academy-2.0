import HeaderBig from "./headerBig/headerBig"
import CoursesBlock from "./coursesBlock/coursesBlock"
import VideoBlock from "./videoBlock/videoBlock";
import Actions from "./actions/actions";


const Home = (props) => {
    return (
        <div>
            <HeaderBig />
            <CoursesBlock />
            <VideoBlock />
            <Actions />
        </div>
    )
}

export default Home;