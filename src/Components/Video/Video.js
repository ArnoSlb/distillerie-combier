import React from "react";
import video from "../../assets/fingers.mp4"



const Video = () => {

    return(
        <video tabIndex="0" autobuffer="true" preload="true" src={video}></video>
    )
}

export default Video