import React from "react";
import video from "../../assets/IntroM2.mp4"
import videoEn from "../../assets/IntroM2En.mp4"
import ArrowDown from "../../assets/Bottom_Arrow.png"
import CombierLogo from "../../assets/Combier_Distil_P179.png"

import './VideoMobile.css'

const VideoMobile = (props) => {


    document.querySelector('.App').style.maxHeight = "100vh"
    document.querySelector('.App').style.overflow = "hidden"

    const VideoMobileExp = () => {
        document.querySelector('.App').style.maxHeight = "inherit"
        document.querySelector('.App').style.overflow = "inherit"
        document.querySelector('.App').style.overflowX = "hidden"
        document.querySelector('.AcceptOver18__container').style.display = "none"

        const videoFile = document.querySelector('.VideoMobile__file');
        videoFile.play()

        console.log("search ", window.location.search)
        if(window.location.search != undefined && window.location.search != null && window.location.search != ""){
          console.log('je vais au bottlehub')
          const {scrollTop, scrollHeight, clientHeight} = document.documentElement
      
              const pixelToHub = 11750 +  (clientHeight * 3.23)
      
              window.scrollTo({
                  top: pixelToHub,
                  left: 0,
                  behavior: "smooth"
              });
        }
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
            <div className="AcceptOver18__container">
                {props.langSelected == 'FR' ?
                    <div className="Map_18__container Map_18__container--mobile">
                        <img className="Map_18__container__logo Map_18__container__logo--mobile" src={CombierLogo} alt="" />
                        <div className="Map_18__container__accept Map_18__container__accept--mobile">
                            <p className="Map_coin__ ">Pour profiter de l'experience, vous devez avoir l'âge requis*.</p>
                            <div className="Map_18__container__btn_start_exp_container Map_18__container__btn_start_exp_container--mobile">
                                <div id="over18__validate"className="Map_18__container__btn_start_exp Map_18__container__btn_start_exp--mobile" onClick={VideoMobileExp}>
                                    <p>Je suis majeur</p>
                                    <p className="thin">Je poursuis l'expérience</p>
                                </div>
                                <div className="Map_18__container__btn_start_exp whitebtn">
                                    <p>Je n'ai pas l'âge requis</p>
                                    <p className="thin">Je ne poursuis pas l'expérience</p>
                                </div>
                            </div>
                            <p className="rules_country">*Voir la légilsation en vigueur dans votre pays de résidence</p>
                        </div>
                    </div>   
                :
                    <div className="Map_18__container Map_18__container--mobile">
                        <img className="Map_18__container__logo Map_18__container__logo--mobile" src={CombierLogo} alt="" />
                        <div className="Map_18__container__accept Map_18__container__accept--mobile">
                            <p className="Map_coin__ ">To enjoy the Combier Experience, you must be of legal drinking age in your country of residence.*</p>
                            <div className="Map_18__container__btn_start_exp_container Map_18__container__btn_start_exp_container--mobile">
                                <div id="over18__validate"className="Map_18__container__btn_start_exp Map_18__container__btn_start_exp--mobile" onClick={VideoMobileExp}>
                                    <p>I am of legal age</p>
                                    <p className="thin">I enter the experience</p>
                                </div>
                                <div className="Map_18__container__btn_start_exp whitebtn">
                                    <p>I am not of the required age</p>
                                    <p className="thin">I don't enter the experience</p>
                                </div>
                            </div>
                            <p className="rules_country">*See the legislation in force in your country of residence</p>
                        </div>
                    </div>   
                }       
            </div> 
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