import React from "react";
import video from "../../assets/Intro_map.mp4"
import ArrowDown from "../../assets/Bottom_Arrow.png"

import './Video2.css'

const Video2 = (props) => {

    React.useEffect(() => {
        document.querySelector('.App').style.maxHeight = "100vh"
        document.querySelector('.App').style.overflow = "hidden"
    },[])

    const VideoMobileExp = () => {
        document.querySelector('.App').style.maxHeight = "inherit"
        document.querySelector('.App').style.overflow = "inherit"
        document.querySelector('.App').style.overflowX = "hidden"
        document.querySelector('.Video2__Map_coin').style.display = "none"

        const videoFile = document.querySelector('.Video2__file');
        videoFile.play()

    }

    return(
        <div className="Video2">
            {props.langSelected == 'FR' ? 
                <div className="Video2__Map_coin">
                    <div class="coin">
                        <div class="coin__front"></div>
                        <div class="coin__back"></div>
                    </div>
                    <p className="Map_coin__">Bienvenue à la Distillerie Combier pour une visite immersive pleine de surprises. </p>
                    <p className="Video2__btn_start_exp" onClick={VideoMobileExp}>Cliquer pour commencer l’expérience </p>
                </div>
                :
                <div className="Video2__Map_coin">
                    <div class="coin">
                        <div class="coin__front"></div>
                        <div class="coin__back"></div>
                    </div>
                    <p className="Map_coin__">Welcome to the Distillerie Combier  for an immersive visit full of surprises. </p>
                    <p className="Video2__btn_start_exp" onClick={VideoMobileExp}>Click to start the experience</p>
                </div>
            }
            <video className="Video2__file" autobuffer="true" preload="true" playsInline="true" src={video} onEnded={() => {console.log('video finis')}}></video>
        </div>  
        
    )
}

export default Video2