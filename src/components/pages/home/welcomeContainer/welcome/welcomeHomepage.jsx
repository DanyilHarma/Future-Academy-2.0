import React from 'react';
import classes from "./welcomeHomepage.module.css"


const WelcomeHomepage = (props) => {

    return (
        <div className={classes.welcomeInfoContent}>
            <img src={props.imgSrc} alt="" />
            <div dangerouslySetInnerHTML={{ __html: props.text }}></div>
        </div>
    )
}

export default WelcomeHomepage;