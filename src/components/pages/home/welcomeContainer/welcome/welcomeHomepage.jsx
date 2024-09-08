import React from 'react';
import classes from "./welcomeHomepage.module.css"


const WelcomeHomepage = (props) => {

    return (
        <div className={classes.welcomeInfoContent} style={{ marginBottom: props.aboutPage ? "100px" : "" }}>
            <img src={props.imgSrc} alt="" />
            <p dangerouslySetInnerHTML={{ __html: props.text }}></p>
        </div>
    )
}

export default WelcomeHomepage;