import classes from "./testCardHome.module.css"
import ShadowContainer from "../shadowContainer/shadowContainer.";


const TestHome = (props) => {
    return (

        <ShadowContainer style={{ width: "100%", maxWidth: "670px", height: "100%", maxHeight: "220px" }}>
            <div className={classes.test} data-link="/main-landing/test-page/index.html">
                <div className={classes.imageTest}><img src="/images/section-info/Group 837.png" alt="" /></div>
                <div className={classes.textTest}>
                    <h4>Попробуй!</h4>
                    <p>Пройдите тест и узнайте свои способности <br />
                        в сфере информационных технологий</p>
                </div>
            </div>
        </ShadowContainer>

    )
}

export default TestHome;