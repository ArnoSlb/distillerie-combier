import React from "react";
import video from "../../assets/IntroM2.mp4"
import videoEn from "../../assets/IntroM2En.mp4"
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

    const VideoOnEnd = () => {
        document.querySelector('.VideoMobile__End').style.display = "flex"
    }

    const VideoPlayOnDemand = () => {
        
        const videoFile = document.querySelector('.VideoMobile__file');
        videoFile.play()

        document.querySelector('.VideoMobile__End').style.display = "none"
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
                    <div className="VideoMobile__btn_start_exp_container_container">
                        <p className="Map_coin__ margin_btm">Avez-vous plus de 18 Ans ?</p>
                        <div className="VideoMobile__btn_start_exp_container">
                            <p className="VideoMobile__btn_start_exp" onClick={VideoMobileExp}>Oui</p>
                            <p className="VideoMobile__btn_start_exp">Non</p>
                        </div>
                    </div>     
                    <p className="Warning_alcool_mobile">L'ABUS D'ALCOOL EST DANGEREUX POUR LA SANTÉ, À CONSOMMER AVEC MODÉRATION.</p>
                </div>
                :
                <div className="VideoMobile__Map_coin">
                    <div class="coin">
                        <div class="coin__front"></div>
                        <div class="coin__back"></div>
                    </div>
                    <p className="Map_coin__">Welcome to the Distillerie Combier  for an immersive visit full of surprises. </p>
                    <div className="VideoMobile__btn_start_exp_container_container">
                        <p className="Map_coin__ margin_btm">Are you over 18 ?</p>
                        <div className="VideoMobile__btn_start_exp_container">
                            <p className="VideoMobile__btn_start_exp" onClick={VideoMobileExp}>Yes</p>
                            <p className="VideoMobile__btn_start_exp">No</p>
                        </div>
                    </div>     
                    <p className="Warning_alcool_mobile">ALCOHOL ABUSE IS DANGEROUS FOR YOUR HEALTH, CONSUME WITH MODERATION.</p>
                </div>
            }
             {props.langSelected == 'FR' ? 
             <video className="VideoMobile__file" autobuffer="true" preload="true" playsInline={true} src={video} onEnded={VideoOnEnd}></video>
             :
             <video className="VideoMobile__file" autobuffer="true" preload="true" playsInline={true} src={videoEn} onEnded={VideoOnEnd}></video>
             }
            {props.langSelected == 'FR' ? 
            <div className="VideoMobile__End">
                <p className="VideoMobile__End__RepeatVideo" onClick={VideoPlayOnDemand}>Revoir la vidéo</p>
                <p className="BottleBar__scroll__description">Scrollez vers le bas pour découvrir la suite</p>
                <img className="BottleBar__scroll__img slide-bottom" src={ArrowDown} alt="" />
            </div>
            :
            <div className="VideoMobile__End">
                <p className="VideoMobile__End__RepeatVideo" onClick={VideoPlayOnDemand}>Replay video</p>
                <p className="BottleBar__scroll__description">Scroll down to find out more</p>
                <img className="BottleBar__scroll__img slide-bottom" src={ArrowDown} alt="" />
            </div>
            }
        </div>  
        
    )
}

export default VideoMobile