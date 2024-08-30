import styled from "styled-components";

const ImageBackground = styled.img`
  position: absolute;
  &:nth-child(1) {
    top: 5%;
    left: 95%;
    width: 138px;
  }

  &:nth-child(2) {
    top: 40%;
    left: -5%;
    width: 150px;
  }

  &:nth-child(3) {
    top: 75%;
    left: 93%;
    width: 180px;
  }
`;

const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const ShadowGradient = styled.div`
  position: absolute;
    background: linear-gradient(90deg, #f7941d 0%, #27aae1 100%);
    filter: blur(5px);
    opacity: 0.4;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    z-index: 0;
    border-radius: 10px;
    transition: top 0.3s, left 0.3s, right 0.3s, bottom 0.3s, filter 0.3s, opacity .3s;
`;

const ShadowGradientContainer = styled.div`
    position: relative;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
    transition: transform .5s, transform-origin .5s;

    &:hover{
    transform: scale(1.04);
    transform-origin: center;
    }

    &:hover ${ShadowGradient} {
    filter: blur(15px);
    opacity: 0.9;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
  }
`;

const Accordion = styled.div`
  position: relative;
    z-index: 1;
    padding: 15px;
    border-radius: 10px;
    background-color: #fff;
`;

const TitleAccordionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const TitleAccordion = styled.h4`
  font-family: var(--font-family);
    font-weight: 500;
    font-size: 18px;
    line-height: 189%;
    color: #00093c;
`;

const AccordionParagraf = styled.p`
  font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 186%;
    color: #000;
`;

export {
  ImageBackground, AccordionContainer, ShadowGradientContainer, ShadowGradient, Accordion, TitleAccordionWrapper, TitleAccordion, AccordionParagraf
}