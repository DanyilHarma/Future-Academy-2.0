import { useState } from "react";
import classes from "./myAccordion.module.css";
import { ImageBackground, AccordionContainer, ShadowGradient, ShadowGradientContainer, Accordion, TitleAccordionWrapper, TitleAccordion, AccordionParagraf } from "./myAccordion.styles.js";
import imageBackground1 from "../../../../../../assets/images/images-all-courses-page/images-chess-page/Vector (1).png";
import imageBackground2 from "../../../../../../assets/images/images-all-courses-page/images-chess-page/Vector (2).png";
import imageBackground3 from "../../../../../../assets/images/images-all-courses-page/images-chess-page/Vector (3).png";
import open from "../../../../../../assets/images/images-all-courses-page/images-chess-page/Group 859.png";
import close from "../../../../../../assets/images/images-all-courses-page/images-chess-page/Group 858.png";

const MyAccordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={`container ${classes.accordionWrapper}`}>
            <ImageBackground src={imageBackground1} />
            <ImageBackground src={imageBackground2} />
            <ImageBackground src={imageBackground3} />
            <AccordionContainer>
                {props.type === "detailed" ? null : <h3>Найдите ответ на свой вопрос</h3>}
                {props.accordionData.map((data, index) => (
                    <ShadowGradientContainer key={index}>
                        <ShadowGradient />
                        <Accordion onClick={() => toggleAccordion(index)}>
                            <TitleAccordionWrapper>
                                <TitleAccordion>{props.type === "detailed" ? data.dayTitle : data.title}</TitleAccordion>
                                <img src={activeIndex === index ? close : open} className={classes.openButton} alt="toggle" />
                            </TitleAccordionWrapper>
                            {activeIndex === index && (
                                props.type === "detailed" ? (
                                    data.events.map((event, eventIndex) => (
                                        <div key={eventIndex} className={classes.programmItem}>
                                            <div className={classes.time}>{event.time}</div>
                                            <div className={classes.details}>
                                                <h3>{event.title}</h3>
                                                <div className={classes.eventProgrammText}>{event.text}</div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <AccordionParagraf>
                                        {data.text}
                                    </AccordionParagraf>
                                )
                            )}
                        </Accordion>
                    </ShadowGradientContainer>
                ))}
            </AccordionContainer>
        </div>
    );
};

export default MyAccordion;