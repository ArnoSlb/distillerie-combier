import React from "react";
import video from "../../assets/production ID_5208988.mp4"
import ArrowDown from "../../assets/Bottom_Arrow.png"

import './VideoMobile.css'

const VideoMobile = (props) => {


    document.querySelector('.App').style.maxHeight = "100vh"
    document.querySelector('.App').style.overflow = "hidden"

    const VideoMobileExp = () => {
        document.querySelector('.App').style.maxHeight = "inherit"
        document.querySelector('.App').style.overflow = "inherit"
        document.querySelector('.App').style.overflowX = "hidden"
        document.querySelector('.VideoMobile__Map_coin').style.display = "none"

        const videoFile = document.querySelector('.VideoMobile__file');
        videoFile.play()
    }
    

    return(
        <div className="VideoMobile">
            {props.langSelected == 'FR' ? 
                <div className="VideoMobile__Map_coin">
                    <div class="coin">
                        <div class="coin__front"></div>
                        <div class="coin__back"></div>
                    </div>
                    <p className="Map_coin__">Bienvenue à la Distillerie Combier pour une visite immersive pleine de surprises. </p>
                    <p className="VideoMobile__btn_start_exp" onClick={VideoMobileExp}>Cliquer pour <br/> commencer l’expérience </p>
                </div>
                :
                <div className="VideoMobile__Map_coin">
                    <div class="coin">
                        <div class="coin__front"></div>
                        <div class="coin__back"></div>
                    </div>
                    <p className="Map_coin__">Welcome to the Distillerie Combier  for an immersive visit full of surprises. </p>
                    <p className="VideoMobile__btn_start_exp" onClick={VideoMobileExp}>Click to <br/>start the experience</p>
                </div>
            }
            <video className="VideoMobile__file" autobuffer="true" preload="true" playsinline="true" src={video}></video>
        </div>  
        
    )
}

export default VideoMobile