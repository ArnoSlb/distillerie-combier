import React from "react";
import video from "../../assets/fingers.mp4"

const Video = () => {

    return(
        <video id="v0" tabIndex="0" autobuffer="true" preload="true" src={video}></video>
    )
}

export default Video