import React from 'react';
import classes from "./welcomeContainer.module.css"
import { useSelector } from 'react-redux';
import WelcomeHomepage from './welcome/welcomeHomepage';


const WelcomeContainer = (props) => {
    const welcomeTitle = useSelector(state => state.welcomeHomepage.welcomeDataHomepage)

    const welcomeElement = welcomeTitle.map(welcome => (<WelcomeHomepage key={welcome.id} imgSrc={welcome.imgSrc} text={welcome.text} />))

    return (
        <div className="container">
            <h2 className={classes.welcomeTitle}>Добро пожаловать в Академию будущего ХОД</h2>
            <div className={classes.welcomeInfo}>
                {welcomeElement}
            </div>
        </div>
    )
}

export default WelcomeContainer;