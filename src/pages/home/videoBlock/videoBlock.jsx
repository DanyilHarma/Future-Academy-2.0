import React, { useState } from 'react';
import classes from "./videoBlock.module.css"
import SvgOne from "./svg/svgOne";
import SvgTwo from "./svg/svgTwo"
import SvgThree from "./svg/svgThree"
import SvgFour from "./svg/svgFour"


const VideoBlock = (props) => {


    const [isPlaying, setIsPlaying] = useState(false);

    const playVideo = () => {
        setIsPlaying(true);
    }

    return (
        <div className={classes.infoAboutProject}>
            <div className={classes.videoContainer}>
                <SvgOne />
                <SvgTwo />
                <SvgThree />
                <SvgFour />
                <div className={classes.video}>
                    {!isPlaying ? (<div className={classes.videoOverlay} onClick={playVideo}>
                        <img src="/images/iframe-images/603123.png" alt="" className={classes.boyImageIframe} />
                        <img src="/images/iframe-images/Group 779.png" alt="" className={classes.play} />
                        <div className={classes.dark}></div>
                    </div>) : false}
                    <iframe className={classes.iframeVideo} width="560" height="315"
                        src={`https://www.youtube.com/embed/1Y5n0nu98Vg?si=d8dZ5vilaINExv8x${isPlaying ? '&autoplay=1' : ''}`} title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default VideoBlock;