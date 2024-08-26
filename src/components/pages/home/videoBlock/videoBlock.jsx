import React, { useState } from 'react';
import classes from "./videoBlock.module.css"
import SvgOne from "./svg/svgOne";
import SvgTwo from "./svg/svgTwo"
import SvgThree from "./svg/svgThree"
import SvgFour from "./svg/svgFour"
import PosterImage from "../../../../assets/images/iframe-images/603123.png"
import playImage from "../../../../assets/images/iframe-images/Group 779.png"

const VideoBlock = (props) => {


    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {
        setIsPlaying(true);
    }

    const posterImage = props.videoData?.iframeData?.posterImage || PosterImage;
    const videoSrc = props.videoData?.iframeData?.videoSrc || "https://www.youtube.com/embed/1Y5n0nu98Vg?si=d8dZ5vilaINExv8x";

    return (
        <div className={classes.infoAboutProject}>
            <div className={classes.videoContainer}>
                <SvgOne />
                <SvgTwo />
                <SvgThree />
                <SvgFour />
                <div className={classes.video}>
                    {!isPlaying ? (<div className={classes.videoOverlay} onClick={playVideo}>
                        <img src={posterImage ? posterImage : PosterImage} alt="" className={classes.posterImageFrame} />
                        <img src={playImage} alt="" className={classes.play} />
                        <div className={classes.dark}></div>
                    </div>) : false}
                    <iframe className={classes.iframeVideo} width="560" height="315"
                        src={`${videoSrc ? videoSrc : "https://www.youtube.com/embed/1Y5n0nu98Vg?si=d8dZ5vilaINExv8x"}${isPlaying ? '&autoplay=1' : ''}`} title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoBlock;